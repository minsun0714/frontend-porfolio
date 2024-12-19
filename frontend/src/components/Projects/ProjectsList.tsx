import Image from "next/image";
import images from "@/assets";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselIndicator,
	CarouselIndicatorContainer,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

export const ProjectsList = () => {
	const projectList = [
		{
			title: "Musicle",
			date: "2024.11",
			peerCount: 2,
			isLeader: true,
			description:
				"운동 음악 플레이리스트 및 기록 서비스.연간(운동 잔디), 월간(캘린더), 주간(칼로리 소모량 카드), 일(도넛 차트) 단위로 운동 시간 기록 파트 개발.",
			skills: ["Vue.js", "Typescript", "vue-query", "chart.js", "vercel"],
			isVertical: true,
			imageUrls: [images.signature, images.thumbnail],
		},
		{
			title: "Musicle",
			date: "2024.11",
			peerCount: 2,
			isLeader: true,
			description:
				"운동 음악 플레이리스트 및 기록 서비스.연간(운동 잔디), 월간(캘린더), 주간(칼로리 소모량 카드), 일(도넛 차트) 단위로 운동 시간 기록 파트 개발.",
			skills: ["Vue.js", "Typescript", "vue-query", "chart.js", "vercel"],
			isVertical: false,
			imageUrls: [images.signature, images.thumbnail],
		},
	];
	return (
		<section>
			<ul className="text-black">
				{projectList.map((project, rowIdx) => {
					return (
						<div
							key={rowIdx}
							className="grid grid-cols-2 gap-x-4 px-4 py-12 bg-white "
						>
							<Carousel className="flex flex-col justify-center">
								<CarouselContent className="">
									{project.imageUrls.map((card, idx) => (
										<CarouselItem key={idx} className="">
											<Card>
												<CardContent className="flex items-center justify-center">
													<div
														className={cn(
															project.isVertical
																? "relative flex h-80 w-1/3"
																: "h-48 w-2/3",
														)}
													>
														<Image
															src={card}
															alt="학습 자료 썸네일"
															width={400}
															height={180}
															className="object-cover w-full h-full rounded-sm"
														/>
														{project.isVertical && (
															<>
																<CarouselPrevious />
																<CarouselNext />
															</>
														)}
													</div>
												</CardContent>
											</Card>
										</CarouselItem>
									))}
								</CarouselContent>
								{!project.isVertical && (
									<CarouselIndicatorContainer>
										{project.imageUrls.map((_, idx) => {
											return (
												<li key={idx}>
													<CarouselIndicator targetIdx={idx} />
												</li>
											);
										})}
									</CarouselIndicatorContainer>
								)}
							</Carousel>
							<div className="p-12 flex flex-col items-center border-8 border-slate-200">
								<div>
									<h2>{project.title}</h2>
									<h3>
										{project.date} · {project.peerCount}인 프로젝트
										{project.isLeader && " 팀장"}
									</h3>
								</div>
								<div>
									<p>{project.description}</p>
									<p className="border-l-4 border-black p-3">
										{project.skills.join(", ")}
									</p>
								</div>
								<div>
									<Button>Detail</Button>
								</div>
							</div>
						</div>
					);
				})}
			</ul>
		</section>
	);
};
