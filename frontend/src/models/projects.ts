export interface Project {
	title: string;
	date: string;
	peerCount: number;
	isLeader: boolean;
	description: string;
	skills: string[];
	isVertical: boolean;
	imageUrls: string[];
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
		isVertical: false,
		imageUrls: ["main.png", "exercise-card.png", "mypage1.png", "mypage2.png"].map(
			(fileName) => `/projects/musicle/${fileName}`,
		),
	},
	{
		title: "장미전쟁 점수 계산 프로그램 버전2",
		date: "2024.10-진행중",
		peerCount: 1,
		isLeader: false,
		description:
			"기존 장미전쟁 점수 계산 프로그램(버전1)에 게시판 기능을 덧붙이고 클라이언트-서버 아키텍처로 재구축",
		skills: ["Vue.js", "Typescript", "vue-query", "pinia"],
		isVertical: true,
		imageUrls: ["game.png", "search.png", "detail.png", "login.png"].map(
			(fileName) => `/projects/rosewar2/${fileName}`,
		),
	},
	{
		title: "장미전쟁 점수 계산 프로그램 버전1",
		date: "2023.04",
		peerCount: 1,
		isLeader: false,
		description:
			"보드게임 장미전쟁의 점수 계산을 계산기로 일일히 계산하기 번거로워 클릭만 하면 자동으로 점수를 계산해주고 승패를 가려주는 서비스 개발",
		skills: ["React.js", "Typescript", "redux-toolkit"],
		isVertical: true,
		imageUrls: ["result.png", "game.png"].map(
			(fileName) => `/projects/rosewar1/${fileName}`,
		),
	},
	{
		title: "Playpack",
		date: "2023.07-2023-08",
		peerCount: 6,
		isLeader: true,
		description: "지역 주민들과 여행 용품을 렌탈할 수 있는 플랫폼 서비스 개발",
		skills: ["React.js", "Typescript", "redux-toolkit", "React-Query"],
		isVertical: false,
		imageUrls: ["logo", "login", "reservation"].map(
			(fileName) => `/projects/playpack/${fileName}.png`,
		),
	},
];
