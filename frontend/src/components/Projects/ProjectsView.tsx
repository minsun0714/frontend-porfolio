import { ProjectsList } from "@/components/Projects/ProjectsList";

export const ProjectsView = () => {
	return (
		<section className="py-12 w-screen  flex flex-col justify-center items-center bg-slate-100 min-h-screen">
			<h1 className="flex py-6 text-5xl text-black font-extrabold border-b-8 border-blue-600">Projects</h1>
			<section className="flex items-center justify-evenly w-full tablet:w-[660px] p-12">
				<ProjectsList />
			</section>
		</section>
	);
};
