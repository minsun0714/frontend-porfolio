import { EducationList } from "@/components/Education/EducationList";

export const EducationView = () => {
	return (
		<section id="education-section" className="py-16 w-full flex flex-col justify-center items-center bg-white min-h-screen">
			<h1 className="flex py-3 tablet:py-6 text-3xl tablet:text-5xl text-black font-extrabold border-b-8 border-blue-600">
				Education
			</h1>
			<section>
				<EducationList />
			</section>
		</section>
	);
};
