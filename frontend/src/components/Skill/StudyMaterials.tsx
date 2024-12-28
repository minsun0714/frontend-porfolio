import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineAdsClick } from "react-icons/md";
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
							<Card className="group">
								<Link href={card.url} target="_blank">
									<CardContent className="flex flex-col items-center justify-center">
										<div className="h-52 w-full">
											<Button
												className="w-full rounded-b-none group-hover:underline transition-all"
												variant="link"
											>
												포스팅 보러가기
												<MdOutlineAdsClick />
											</Button>
											<Image
												src={card.thumbnailImg}
												alt="학습 자료 썸네일"
												width={400}
												height={180}
												className="object-cover w-full h-44 rounded-none"
											/>
										</div>
										<p className="text-sm font-semibold p-6 border-t border-t-gray-400">
											{card.title}
										</p>
									</CardContent>
								</Link>
							</Card>
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
