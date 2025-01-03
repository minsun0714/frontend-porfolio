import { ProjectsList } from "@/components/Projects/ProjectsList";

export const ProjectsView = () => {
	return (
		<section id="projects-section" className="py-24 w-screen flex flex-col justify-center items-center bg-slate-100 min-h-screen">
			<h1 className="flex py-3 tablet:py-6 text-3xl tablet:text-5xl text-black font-extrabold border-b-8 border-blue-600">
				Projects
			</h1>
			<section className="flex items-center justify-evenly w-full tablet:w-3/4 laptop:w-[880px] p-9">
				<ProjectsList />
			</section>
		</section>
	);
};
