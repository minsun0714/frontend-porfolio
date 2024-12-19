import Image from "next/image";
import images from "@/assets/index";
import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

export const StudyMaterials = () => {
	const studyMaterialCards = [
		{
			id: 0,
			title: "[git hook] pre-commit 검사단계에서 lint 검사 자동화",
			thumbnailImg: images.signature,
			url: "https://velog.io/@jasmine0714/AWS-ALB",
		},
		{
			id: 0,
			title: "[git hook] pre-commit 검사단계에서 lint 검사 자동화",
			thumbnailImg: images.thumbnail,
			url: "https://velog.io/@jasmine0714/AWS-ALB",
		},
		{
			id: 0,
			title: "[git hook] pre-commit 검사단계에서 lint 검사 자동화",
			thumbnailImg: images.thumbnail,
			url: "https://velog.io/@jasmine0714/AWS-ALB",
		},
	];
	return (
		<section>
			<Carousel className="w-full max-w-xs">
				<CarouselContent>
					{studyMaterialCards.map((card, index) => (
						<CarouselItem key={index}>
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
			</Carousel>
		</section>
	);
};
