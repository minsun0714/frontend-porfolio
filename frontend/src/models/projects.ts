import { StaticImageData } from "next/image";
import images from "@/assets";

export interface Project {
	title: string;
	date: string;
	peerCount: number;
	isLeader: boolean;
	description: string;
	skills: string[];
	isVertical: boolean;
	imageUrls: StaticImageData[];
}

export const projectList: Project[] = [
	{
		title: "Musicle",
		date: "2024.11",
		peerCount: 2,
		isLeader: true,
		description:
			"운동 음악 플레이리스트 및 기록 서비스.연간(운동 잔디), 월간(캘린더), 주간(칼로리 소모량 카드), 일(도넛 차트) 단위로 운동 시간 기록 파트 개발.",
		skills: ["Vue.js", "Typescript", "vue-query", "chart.js", "vercel"],
		isVertical: true,
		imageUrls: [images.thumbnail, images.thumbnail],
	},
	{
		title: "Musicle",
		date: "2024.11",
		peerCount: 2,
		isLeader: true,
		description:
			"운동 음악 플레이리스트 및 기록 서비스.연간(운동 잔디), 월간(캘린더), 주간(칼로리 소모량 카드), 일(도넛 차트) 단위로 운동 시간 기록 파트 개발.",
		skills: ["Vue.js", "Typescript", "vue-query", "chart.js", "vercel"],
		isVertical: false,
		imageUrls: [images.signature, images.signature, images.signature],
	},
];
