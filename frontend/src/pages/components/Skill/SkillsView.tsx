import { SkillsList } from "@/pages/components/Skill/SkllsList";

export const SkillsView = () => {
	return (
		<section className="flex flex-col justify-center items-center border border-red-500 h-screen w-full">
			<h1>Skills</h1>
			<SkillsList />
		</section>
	);
};
