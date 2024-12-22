export interface Education {
	title: string;
	startDate: string;
	endDate: string;
	list: {
		id: number;
		name: string;
		icon: string;
		description: string;
	}[];
}

export const educationList: Education[] = [
	{
		title: "삼성 청년 SW 아카데미",
		startDate: "2024.07",
		endDate: "진행중",
		list: [
			{
				id: 0,
				name: "등수로 보는 근면함",
				icon: "Bs1Circle", // 아이콘 이름을 문자열로 저장
				description:
					"Frontend(HTML, CSS, Javascript), Vue.js, Java, Backend(Spring Boot, MyBatis), 서블릿 디버깅 등 과목평가에서 꾸준히 반 1등을 할만큼 개발이라면 분야를 가리지 않고 지식을 습득했습니다.",
			},
			{
				id: 1,
				name: "수상 경험으로 보는 협업 성과",
				icon: "GoTrophy",
				description:
					"1학기 최종 2인 협업 프로젝트에서 팀장 담당 당시, 팀원의 강점을 발굴하고 적재적소에 활용하도록 독려하여 우수상을 수상했습니다.",
			},
			{
				id: 2,
				name: "자격 취득으로 보는 기초 역량",
				icon: "SiThealgorithms",
				description:
					"삼성 SW 역량테스트에서 A형 취득에 대비하며 프로그래밍에 요구되는 기초 자료구조 및 알고리즘 활용 역량을 쌓았습니다.",
			},
		],
	},
];
