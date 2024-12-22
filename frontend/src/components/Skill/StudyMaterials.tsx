import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselIndicator,
	CarouselIndicatorContainer,
} from "@/components/ui/carousel";
import { useSkillStore } from "@/store/skills";

export const StudyMaterials = () => {
	const { id, studyMaterialCards } = useSkillStore();

	return (
		<section>
			<Carousel className="w-full max-w-xs">
				<CarouselContent>
					{studyMaterialCards()?.map((card, idx) => (
						<CarouselItem key={id + idx}>
							<div className="">
								<Card>
									<CardContent className="flex flex-col items-center justify-center">
										<div className="h-52 w-full">
											<Image
												src={card.thumbnailImg}
												alt="학습 자료 썸네일"
												width={380}
												height={180}
												className="object-cover w-full h-full rounded-t-md"
											/>
										</div>
										<p className="text-sm font-semibold p-3 pb-9 border-t border-t-gray-400">
											{card.title}
										</p>
									</CardContent>
								</Card>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>

				<CarouselIndicatorContainer>
					{studyMaterialCards()?.map((_, idx) => {
						return (
							<li key={id + idx}>
								<CarouselIndicator targetIdx={idx} />
							</li>
						);
					})}
				</CarouselIndicatorContainer>
			</Carousel>
		</section>
	);
};
