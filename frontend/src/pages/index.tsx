import { Geist, Geist_Mono } from "next/font/google";
import { Main } from "@/pages/components/Main/Main";
import { SkillsView } from "@/pages/components/Skill/SkillsView";

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
		</div>
	);
}
