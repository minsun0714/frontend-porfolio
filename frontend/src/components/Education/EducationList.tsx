import { Bs1Circle } from "react-icons/bs";
import { GoTrophy } from "react-icons/go";
import { SiThealgorithms } from "react-icons/si";

export const EducationList = () => {
	const educationList = [
		{
			title: "삼성 청년 SW 아카데미",
			list: [
				{
					id: "0",
					name: "과목평가 반 1등",
					icon: Bs1Circle,
					description:
						"1학기 과목평가 꾸준한 반 1등 기록 Frontend(HTML, CSS, Javascript), Vue.js, Java, Backend(Spring Boot, MyBatis), 서블릿 디버깅 등",
				},
				{
					id: "1",
					name: "2인 협업 프로젝트 우수상",
					icon: GoTrophy,
				},
				{
					id: "2",
					name: "SW 역량 테스트 A형",
					icon: SiThealgorithms,
				},
			],
		},
	];
	return (
		<section>
			<ul>
				{educationList.map((education, idx) => {
					return (
						<li key={idx} className="flex flex-col items-center text-black">
							<h2 className="text-3xl text-black font-bold">
								{education.title}
							</h2>
							<ul className="grid grid-cols-3 gap-x-24">
								{education.list.map((achievement) => {
									return (
										<li
											key={achievement.id}
											className="flex flex-col items-center justify-center text-xl font-medium max-w-64"
										>
											<achievement.icon size={200} color="black" />
											<h3>{achievement.name}</h3>
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
