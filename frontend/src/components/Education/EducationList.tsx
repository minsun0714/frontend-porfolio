import { useEffect, useState } from "react";
import { getIconComponent } from "@/lib/utils";
import { Education } from "@/models/educations";

export const EducationList = () => {
	const [educationList, setEducationList] = useState<Education[]>();
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		fetch("/api/educations")
			.then((res) => res.json())
			.then((data) => {
				setEducationList(data);
				setLoading(false);
			});
	}, []);

	if (isLoading) return <p>Loading...</p>;
	if (!educationList) return <p>No Education data</p>;
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
									const Icon = getIconComponent(achievement.icon);
									return (
										<li
											key={achievement.id}
											className="grid grid-rows-2 tablet:grid-rows-1 tablet:grid-cols-2 laptop:grid-rows-2 laptop:grid-cols-1 text-xl max-w-xl gap-4 tablet:gap-12"
										>
											<div className="flex justify-center">
												{Icon && <Icon size={200} />}
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
