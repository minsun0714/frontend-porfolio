export const Navbar = () => {
	return (
		<header className="z-50 h-16 w-screen flex justify-evenly items-center bg-white text-black font-bold fixed">
			<div>Frontend_Portfolio</div>
			<ul className="flex gap-x-10">
				<li>Skills</li>
				<li>Projects</li>
				<li>Education</li>
				<li>Others</li>
			</ul>
		</header>
	);
};
