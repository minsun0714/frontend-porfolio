import { Geist, Geist_Mono } from "next/font/google";
import { EducationView } from "@/components/Education/EducationView";
import { Footer } from "@/components/Footer";
import { Main } from "@/components/Main/Main";
import { ProjectsView } from "@/components/Projects/ProjectsView";
import { SkillsView } from "@/components/Skill/SkillsView";

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
			className={`${geistSans.variable} ${geistMono.variable} w-full flex flex-col justify-center items-center min-h-screen`}
		>
			<Main />
			<SkillsView />
			<ProjectsView />
			<EducationView />
			<Footer />
		</div>
	);
}
