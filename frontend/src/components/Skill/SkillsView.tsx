import { SkillsList } from "@/components/Skill/SkllsList";
import { StudyMaterials } from "@/components/Skill/StudyMaterials";

export const SkillsView = () => {
	return (
		<section
			id="skills-section"
			className="flex flex-col justify-center items-center h-screen w-full"
		>
			<h1 className="flex py-3 tablet:py-6 text-3xl tablet:text-5xl text-white font-extrabold border-b-8 border-blue-600">
				Skills
			</h1>
			<section className="flex flex-col laptop:flex-row items-center pt-12">
				<SkillsList />
				<StudyMaterials />
			</section>
		</section>
	);
};
