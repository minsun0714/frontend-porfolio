import { Geist, Geist_Mono } from "next/font/google";
import { Main } from "@/components/Main/Main";
import { SkillsView } from "@/components/Skill/SkillsView";
import { ProjectsView } from "@/components/Projects/ProjectsView";
import { EducationView } from "@/components/Education/EducationView";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export default function Home() {
	return (
		<div
			className={`${geistSans.variable} ${geistMono.variable} flex flex-col justify-center items-center min-h-screen`}
		>
			<Main />
			<SkillsView />
			<ProjectsView />
			<EducationView />
		</div>
	);
}
