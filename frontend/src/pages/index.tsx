import { Geist, Geist_Mono } from "next/font/google";

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
			className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}
		>
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				<h2>프론트엔드 개발자 이민선</h2>
				<h1>이민선</h1>
			</main>
		</div>
	);
}
