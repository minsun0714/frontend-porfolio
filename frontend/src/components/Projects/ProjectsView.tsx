import { ProjectsList } from "@/components/Projects/ProjectsList";

export const ProjectsView = () => {
	return (
		<section className="w-full flex flex-col justify-center items-center bg-slate-100 h-screen">
			<h1 className="text-black">Projects</h1>
			<section className="flex items-center justify-evenly w-[1000px]">
				<ProjectsList />
			</section>
		</section>
	);
};
