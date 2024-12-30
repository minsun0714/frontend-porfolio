import { useEffect, useState } from "react";
import { FaLaptopCode } from "react-icons/fa6";
import { Badge } from "@/components/ui/badge";
import { useSkillStore } from "@/store/skills";

export const SkillsList = () => {
	const { skillsList, setId, setSkillsList, id } = useSkillStore();
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		fetch("/api/skills")
			.then((res) => res.json())
			.then((data) => {
				setSkillsList(data);
				setLoading(false);
			});
	}, [setSkillsList]);

	if (isLoading) return <p>Loading...</p>;
	if (!skillsList) return <p>No skills data</p>;
	return (
		<section>
			<ul className="p-12">
				{skillsList.map((skills, rowIdx) => {
					return (
						<li key={rowIdx} className="grid laptop:grid-cols-2 max-w-96">
							<div className="flex flex-row items-start gap-2 pt-6">
								<FaLaptopCode />
								<h2>{skills.title}</h2>
							</div>
							<ul className="flex flex-row flex-wrap gap-2  py-4">
								{skills.list.map((skill) => {
									return (
										<li
											key={skill.id}
											className="relative cursor-pointer"
											onClick={() => setId(skill.id)}
										>
											<Badge
												variant={skill.id === id ? "secondary" : "outline"}
											>
												{skill.name}
											</Badge>
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
