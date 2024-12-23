import { ProjectCarousel } from "./ProjectCarousel";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Project } from "@/models/projects";

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
													hi
												</DialogDescription>
											</DialogHeader>
										</DialogContent>
									</Dialog>
								</div>
							</div>
							<ProjectCarousel project={project} />
						</div>
					);
				})}
			</ul>
		</section>
	);
};
