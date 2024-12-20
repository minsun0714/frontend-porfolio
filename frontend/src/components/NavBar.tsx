export const Navbar = () => {
	return (
		<header className="z-50 h-16 w-screen flex justify-evenly items-center bg-white text-black font-bold fixed">
			<div className="w-screen tablet:w-[1000px] laptop:w-screen flex justify-evenly items-center">
				<div className="pl-12 tablet:pl-0">Frontend_Portfolio</div>
				<ul className="flex gap-x-4 invisible tablet:visible">
					<li>Skills</li>
					<li>Projects</li>
					<li>Education</li>
				</ul>
			</div>
		</header>
	);
};
