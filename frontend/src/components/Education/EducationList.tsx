import { Bs1Circle } from "react-icons/bs";
import { GoTrophy } from "react-icons/go";
import { SiThealgorithms } from "react-icons/si";

export const EducationList = () => {
	const educationList = [
		{
			title: "삼성 청년 SW 아카데미",
			startDate: "2024.07",
			endDate: "진행중",
			list: [
				{
					id: "0",
					name: "등수로 보는 근면함",
					icon: Bs1Circle,
					description:
						"Frontend(HTML, CSS, Javascript), Vue.js, Java, Backend(Spring Boot, MyBatis), 서블릿 디버깅 등 과목평가에서 꾸준히 반 1등을 할만큼 개발이라면 분야를 가리지 않고 지식을 습득했습니다.",
				},
				{
					id: "1",
					name: "수상 경험으로 보는 협업 성과",
					icon: GoTrophy,
					description:
						"1학기 최종 2인 협업 프로젝트에서 팀장 담당 당시, 팀원의 강점을 발굴하고 적재적소에 활용하도록 독려하여 우수상을 수상했습니다.",
				},
				{
					id: "2",
					name: "자격 취득으로 보는 기초 역량",
					icon: SiThealgorithms,
					description:
						"삼성 SW 역량테스트에서 A형 취득에 대비하며 프로그래밍에 요구되는 기초 자료구조 및 알고리즘 활용 역량을 쌓았습니다.",
				},
			],
		},
		{
			title: "코드스테이츠 FE 과정",
			startDate: "2023.02",
			endDate: "2023.08",
			list: [
				{
					id: "0",
					name: "등수로 보는 근면함",
					icon: Bs1Circle,
					description:
						"Frontend(HTML, CSS, Javascript), Vue.js, Java, Backend(Spring Boot, MyBatis), 서블릿 디버깅 등 과목평가에서 반 1등을 할만큼 개발이라면 분야를 가리지 않고 지식을 습득했습니다.",
				},
				{
					id: "1",
					name: "수상 경험으로 보는 협업 성과",
					icon: GoTrophy,
					description:
						"1학기 최종 2인 협업 프로젝트에서 팀장 담당 당시, 팀원의 강점을 발굴하고 적재적소에 활용하도록 독려하여 우수상을 수상했습니다.",
				},
				{
					id: "2",
					name: "자격 취득으로 보는 기초 역량",
					icon: SiThealgorithms,
					description:
						"삼성 SW 역량테스트에서 A형 취득에 대비하며 프로그래밍에 요구되는 기초 자료구조 및 알고리즘 활용 역량을 쌓았습니다.",
				},
			],
		},
	];
	return (
		<section>
			<ul className="py-24">
				{educationList.map((education, idx) => {
					return (
						<li
							key={idx}
							className="flex flex-col items-center text-black py-3"
						>
							<div className="text-black font-bold py-12">
								<h2 className="text-3xl">{education.title}</h2>
								<h3 className="text-center font-light text-gray-400">
									{education.startDate}-{education.endDate}
								</h3>
							</div>
							<ul className="grid grid-cols-1 laptop:grid-cols-3 gap-12 p-24 laptop:max-w-[1000px] laptop:p-24">
								{education.list.map((achievement) => {
									return (
										<li
											key={achievement.id}
											className="grid grid-rows-2 tablet:grid-rows-1 tablet:grid-cols-2 laptop:grid-rows-2 laptop:grid-cols-1 text-xl max-w-xl gap-4 tablet:gap-12"
										>
											<div className="flex justify-center">
												<achievement.icon size={200} color="black" />
											</div>
											<div className="flex flex-col items-start gap-y-5">
												<h3 className="font-medium">{achievement.name}</h3>
												<p className="text-left text-base">
													{achievement.description}
												</p>
											</div>
										</li>
									);
								})}
							</ul>
						</li>
					);
				})}
			</ul>
		</section>
	);
};
