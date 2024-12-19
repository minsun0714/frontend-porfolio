import { FaLaptopCode } from "react-icons/fa6";

export const SkillsList = () => {
	const skillsList = [
		{
			title: "언어",
			list: [
				{
					id: "0",
					name: "Javascript",
					bgColor: "yellow",
				},
				{
					id: "1",
					name: "Typescript",
					bgColor: "blue",
				},
			],
		},
		{
			title: "프레임워크",
			list: [
				{
					id: "2",
					name: "React.js",
					bgColor: "skyblue",
				},
				{
					id: "3",
					name: "React.js",
					bgColor: "skyblue",
				},
				{
					id: "4",
					name: "React.js",
					bgColor: "skyblue",
				},
			],
		},
	];
	return (
		<section>
			<ul>
				{skillsList.map((skills, rowIdx) => {
					return (
						<li key={rowIdx}>
							<div>
								<FaLaptopCode />
								<h2>{skills.title}</h2>
							</div>
							<ul>
								{skills.list.map((skill) => {
									return <li key={skill.id}>{skill.name}</li>;
								})}
							</ul>
						</li>
					);
				})}
			</ul>
		</section>
	);
};
