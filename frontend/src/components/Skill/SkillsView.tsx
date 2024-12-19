import { SkillsList } from "@/components/Skill/SkllsList";
import { StudyMaterials } from "@/components/Skill/StudyMaterials";

export const SkillsView = () => {
	return (
		<section className="flex flex-col justify-center items-center border border-red-500 h-screen w-full">
			<h1>Skills</h1>
			<section className="flex items-center max-w-1/4">
				<SkillsList />
				<StudyMaterials />
			</section>
		</section>
	);
};
