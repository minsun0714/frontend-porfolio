type SkillName =
	| "언어"
	| "FE 프레임워크"
	| "서버 데이터 동기화"
	| "전역 상태 관리";
export type MaterialCard = {
	title: string;
	thumbnailImg: string;
	url: string;
};
export interface Skills {
	title: SkillName;
	list: {
		id: number;
		name: string;
		bgColor: string;
		materialUrlList: MaterialCard[];
	}[];
}
export const skillsList: Skills[] = [
	{
		title: "언어",
		list: [
			{
				id: 0,
				name: "Javascript",
				bgColor: "yellow",
				materialUrlList: [
					{
						title: "debouncing vs throttling",
						thumbnailImg: "/skills/javascript.png",
						url: "https://velog.io/@jasmine0714/debouncing-vs-throttling",
					},
					{
						title: "얕은 복사 vs 깊은 복사",
						thumbnailImg: "/skills/copy.png",
						url: "https://velog.io/@jasmine0714/copy",
					},
					{
						title: "프로토타입 체인",
						thumbnailImg: "/skills/prototype.png",
						url: "https://velog.io/@jasmine0714/prototype",
					},
					{
						title: "garbage collection",
						thumbnailImg: "/skills/gc.png",
						url: "https://velog.io/@jasmine0714/garbage-collection-minor-vs-major",
					},
				],
			},
			{
				id: 1,
				name: "Typescript",
				bgColor: "blue",
				materialUrlList: [
					{
						title: "구조적 타이핑",
						thumbnailImg: "",
						url: "https://velog.io/@jasmine0714/structural-typing",
					},
					{
						title: "enum vs const enum vs const assertions",
						thumbnailImg: "",
						url: "https://velog.io/@jasmine0714/enum",
					},
				],
			},
			{
				id: 2,
				name: "CSS",
				bgColor: "blue",
				materialUrlList: [
					{
						title: "flex-grow, flex-shrink",
						thumbnailImg: "",
						url: "https://velog.io/@jasmine0714/flex-grow-vs-flex-shrink",
					},
					{
						title: "명시도",
						thumbnailImg: "",
						url: "https://velog.io/@jasmine0714/CSS-specificity",
					},
				],
			},
		],
	},
	{
		title: "FE 프레임워크",
		list: [
			{
				id: 3,
				name: "React.js",
				bgColor: "skyblue",
				materialUrlList: [
					{
						title: "react 배치 처리",
						thumbnailImg: "",
						url: "https://velog.io/@jasmine0714/carousel",
					},
					{
						title: "error-boundary",
						thumbnailImg: "",
						url: "https://velog.io/@jasmine0714/error-boundary",
					},
					{
						title: "server action",
						thumbnailImg: "",
						url: "https://velog.io/@jasmine0714/react-server-action",
					},
					{
						title: "forwardRef",
						thumbnailImg: "",
						url: "https://velog.io/@jasmine0714/forwardRef",
					},
				],
			},
			{
				id: 4,
				name: "Next.js",
				bgColor: "skyblue",
				materialUrlList: [
					{
						title: "optional catch-all segment",
						thumbnailImg: "",
						url: "https://velog.io/@jasmine0714/dynamic-routing",
					},
				],
			},
			{
				id: 5,
				name: "Vue.js",
				bgColor: "skyblue",
				materialUrlList: [],
			},
		],
	},
	{
		title: "서버 데이터 동기화",
		list: [
			{
				id: 6,
				name: "Tanstack Query",
				bgColor: "skyblue",
				materialUrlList: [],
			},
		],
	},
	{
		title: "전역 상태 관리",
		list: [
			{
				id: 7,
				name: "Redux",
				bgColor: "purple",
				materialUrlList: [
					{
						title: "Redux의 데이터 흐름",
						thumbnailImg: "",
						url: "https://velog.io/@jasmine0714/flux",
					},
					{
						title: "Redux를 처음 사용했던 순간",
						thumbnailImg: "",
						url: "https://velog.io/@jasmine0714/toy-project-%EB%8B%AC%EB%A0%A5-%EB%A7%8C%EB%93%A4%EA%B8%B0",
					},
				],
			},
			{
				id: 8,
				name: "Redux-toolkit",
				bgColor: "skyblue",
				materialUrlList: [],
			},
		],
	},
];
