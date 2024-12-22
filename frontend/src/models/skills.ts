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
						title: "title",
						thumbnailImg: "",
						url: "blog.url",
					},
					{
						title: "title",
						thumbnailImg: "",
						url: "blog.url",
					},
					{
						title: "title",
						thumbnailImg: "",
						url: "blog.url",
					},
				],
			},
			{
				id: 1,
				name: "Typescript",
				bgColor: "blue",
				materialUrlList: [
					{
						title: "title",
						thumbnailImg: "",
						url: "blog.url",
					},
					{
						title: "title",
						thumbnailImg: "",
						url: "blog.url",
					},
				],
			},
		],
	},
	{
		title: "FE 프레임워크",
		list: [
			{
				id: 2,
				name: "React.js",
				bgColor: "skyblue",
				materialUrlList: [],
			},
			{
				id: 3,
				name: "Next.js",
				bgColor: "skyblue",
				materialUrlList: [],
			},
			{
				id: 4,
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
				id: 5,
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
				id: 6,
				name: "Redux",
				bgColor: "purple",
				materialUrlList: [],
			},
			{
				id: 7,
				name: "Redux-toolkit",
				bgColor: "skyblue",
				materialUrlList: [],
			},
		],
	},
];
