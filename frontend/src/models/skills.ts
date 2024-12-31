type SkillName =
	| "언어"
	| "프레임워크 및 라이브러리"
	| "서버 데이터 동기화"
	| "전역 상태 관리";
export type MaterialCard = {
	title: string;
	thumbnailImg: string;
	url: string;
};

export interface Skills {
	title: SkillName;
	icon: "FaLaptopCode" | "ImLibrary" | "LuServerCrash" | "RiGlobalLine"
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
		icon: "FaLaptopCode",
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
						thumbnailImg: "/skills/structural-typing.png",
						url: "https://velog.io/@jasmine0714/structural-typing",
					},
					{
						title: "enum vs const enum vs const assertions",
						thumbnailImg: "/skills/enum.png",
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
						thumbnailImg: "/skills/flex.png",
						url: "https://velog.io/@jasmine0714/flex-grow-vs-flex-shrink",
					},
					{
						title: "명시도",
						thumbnailImg: "/skills/specificity.png",
						url: "https://velog.io/@jasmine0714/CSS-specificity",
					},
				],
			},
		],
	},
	{
		title: "프레임워크 및 라이브러리",
		icon: "ImLibrary",
		list: [
			{
				id: 3,
				name: "React.js",
				bgColor: "skyblue",
				materialUrlList: [
					{
						title: "상태 관리 메커니즘에 기반하여 알아보는 state 업데이트 시 주의할 점과 이유",
						thumbnailImg: "/skills/state.png",
						url: "https://velog.io/@jasmine0714/state-update",
					},
					{
						title: "error-boundary",
						thumbnailImg: "/skills/errorboundary.png",
						url: "https://velog.io/@jasmine0714/error-boundary",
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
						thumbnailImg: "/skills/routing.png",
						url: "https://velog.io/@jasmine0714/dynamic-routing",
					},
				],
			},
			{
				id: 5,
				name: "Vue.js",
				bgColor: "skyblue",
				materialUrlList: [
					{
						title:
							"react 사용할 때 공식처럼 생각했던 것이 깨지면서 배운 vue-query와 react-query의 동작 원리 비교",
						thumbnailImg: "/skills/query.png",
						url: "https://velog.io/@jasmine0714/set-query-data",
					},
				],
			},
		],
	},
	{
		title: "서버 데이터 동기화",
		icon: "LuServerCrash",
		list: [
			{
				id: 6,
				name: "Tanstack Query",
				bgColor: "skyblue",
				materialUrlList: [
					{
						title:
							"react 사용할 때 공식처럼 생각했던 것이 깨지면서 배운 vue-query와 react-query의 동작 원리 비교",
						thumbnailImg: "/skills/query.png",
						url: "https://velog.io/@jasmine0714/set-query-data",
					},
				],
			},
		],
	},
	{
		title: "전역 상태 관리",
		icon: "RiGlobalLine",
		list: [
			{
				id: 7,
				name: "Redux",
				bgColor: "purple",
				materialUrlList: [
					{
						title: "Redux의 데이터 흐름",
						thumbnailImg: "/skills/flux.png",
						url: "https://velog.io/@jasmine0714/flux",
					},
					{
						title: "Redux를 처음 사용했던 순간",
						thumbnailImg: "/skills/redux.png",
						url: "https://velog.io/@jasmine0714/toy-project-%EB%8B%AC%EB%A0%A5-%EB%A7%8C%EB%93%A4%EA%B8%B0",
					},
				],
			},
		],
	},
];
