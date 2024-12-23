import Image from "next/image";
import { useEffect, useState } from "react";
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
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Project } from "@/models/projects";
import Example from "@/pages/example.mdx";

export const ProjectsList = () => {
	const [projectList, setProjectList] = useState<Project[]>();
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		fetch("/api/projects")
			.then((res) => res.json())
			.then((data) => {
				setProjectList(data);
				setLoading(false);
			});
	}, []);

	if (isLoading) return <p>Loading...</p>;
	if (!projectList) return <p>No profile data</p>;
	return (
		<section className="flex justify-center">
			<ul className="text-black space-y-10">
				{projectList.map((project, rowIdx) => {
					return (
						<div
							key={rowIdx}
							className="grid laptop:grid-cols-2 p-3 bg-white shadow-md"
						>
							<div className="p-4 flex flex-col border-8 border-slate-200">
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
									<Dialog>
										<DialogTrigger asChild>
											<Button className="">Detail</Button>
										</DialogTrigger>
										<DialogContent className="bg-white">
											<DialogHeader>
												<DialogTitle>{project.title}</DialogTitle>
												<DialogDescription className="bg-white max-h-[600px] overflow-y-scroll">
													<Example />
												</DialogDescription>
											</DialogHeader>
										</DialogContent>
									</Dialog>
								</div>
							</div>
							<Carousel className="flex flex-col justify-center invisible mobile:visible">
								<CarouselContent className="">
									{project.imageUrls.map((card, idx) => (
										<CarouselItem
											key={idx}
											className={cn(project.isVertical ? "" : "")}
										>
											<Card>
												<CardContent className="flex items-center justify-center p-2">
													<Image
														src={card}
														alt="학습 자료 썸네일"
														width={300}
														height={400}
														className="object-cover rounded-sm"
													/>
													{project.isVertical && (
														<>
															<CarouselPrevious />
															<CarouselNext />
														</>
													)}
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
						</div>
					);
				})}
			</ul>
		</section>
	);
};
