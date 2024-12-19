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
			<ul className="text-black space-y-10">
				{projectList.map((project, rowIdx) => {
					return (
						<div key={rowIdx} className="grid grid-cols-2 p-3 bg-white shadow-md">
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
															width={300}
															height={400}
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
							<div className="p-8 flex flex-col border-8 border-slate-200">
								<div className="border-b-2 py-4">
									<h2 className="text-2xl font-bold">{project.title}</h2>
									<h3 className="text-slate-400">
										{project.date} · {project.peerCount}인 프로젝트
										{project.isLeader && " 팀장"}
									</h3>
								</div>
								<div className="py-4">
									<p className="py-4">{project.description}</p>
									<p className="border-l-4 border-black p-4">
										{project.skills.join(", ")}
									</p>
								</div>
								<div className="w-full flex justify-end">
									<Button className="">Detail</Button>
								</div>
							</div>
						</div>
					);
				})}
			</ul>
		</section>
	);
};
