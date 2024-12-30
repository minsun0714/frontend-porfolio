import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselIndicator,
	CarouselIndicatorContainer,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Project } from "@/models/projects";

export const ProjectCarousel = ({ project }: { project: Project }) => {
	return (
		<Carousel className="flex flex-col justify-center invisible mobile:visible">
			<CarouselContent className="">
				{project.imageUrls.map((card, idx) => (
					<CarouselItem key={idx} className={cn(project.isVertical ? "" : "")}>
						<Card>
							<CardContent className="flex items-center justify-center p-2">
								<Image
									src={card}
									alt="학습 자료 썸네일"
									width={800}
									height={200}
									className="object-cover rounded-sm"
								/>
							</CardContent>
						</Card>
					</CarouselItem>
				))}
			</CarouselContent>

			<CarouselIndicatorContainer>
				{project.imageUrls.map((_, idx) => {
					return (
						<li key={idx}>
							<CarouselIndicator targetIdx={idx} />
						</li>
					);
				})}
			</CarouselIndicatorContainer>
		</Carousel>
	);
};
