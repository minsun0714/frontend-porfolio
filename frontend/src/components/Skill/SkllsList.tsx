import { FaLaptopCode } from "react-icons/fa6";
import { Badge } from "@/components/ui/badge";

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
						<li key={rowIdx} className="grid grid-cols-2">
							<div className="flex flex-row items-center gap-2">
								<FaLaptopCode />
								<h2>{skills.title}</h2>
							</div>
							<ul className="flex flex-row gap-4">
								{skills.list.map((skill) => {
									return (
										<li key={skill.id} className="relative cursor-pointer">
											<Badge variant={"secondary"}>{skill.name}</Badge>
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
