import Image from "next/image";
import { IconType } from "react-icons/lib";
import { getIconComponent } from "@/lib/utils";

export const Main = () => {
	const contactInfo = [
		{ value: "010-9669-9617", icon: "FaPhoneAlt" },
		{ value: "woooooooow22@gmail.com", icon: "AiOutlineMail" },
		{ value: "github.com/minsun0714", icon: "FaGithub" },
		{
			value: "velog.io/@jasmine0714",
			icon: "SiVelog",
		},
	];
	return (
		<section id="main-section" className="relative flex justify-center items-center h-screen w-screen">
			<Image
				src="/main/image.png"
				alt="메인 화면"
				fill={true}
				style={{ objectFit: "cover" }}
				priority
				quality={100}
			/>
			<div className="absolute top-1/3 z-10 font-bold text-center w-full">
				<h1 className="text-gray-400 text-3xl font-bold">프론트엔드 개발자</h1>
				<h1 className="text-blue-500 text-6xl font-bold py-4">이민선</h1>
				<p className="text-black font-light">자기소개 한 줄</p>
			</div>
			<ul className="absolute bottom-20 grid grid-cols-1 tablet:grid-cols-2 font-light text-black bg-opacity-40 gap-2 mx-auto tablet:gap-x-20 laptop:gap-x-80">
				{contactInfo.map((info, idx) => {
					const Icon = getIconComponent(info.icon) as IconType;
					return (
						<li key={idx} className="flex justify-start w-full py-2 gap-2">
							<Icon size={20} />
							<address>{info.value}</address>
						</li>
					);
				})}
			</ul>
		</section>
	);
};
