import { useEffect, useState, useCallback } from "react";

export const Navbar = () => {
	const [showHeader, setShowHeader] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	const handleScroll = useCallback(() => {
		if (window.scrollY > lastScrollY) {
			setShowHeader(false);
		} else {
			setShowHeader(true);
		}
		setLastScrollY(window.scrollY);
	}, [lastScrollY]);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [handleScroll]);

	return (
		<header
			className={`z-50 h-32 w-screen flex items-center bg-white text-black font-extrabold fixed transition-transform duration-300 ${
				showHeader ? "translate-y-0" : "-translate-y-1/2"
			}`}
		>
			<div className="absolute top-5 w-screen flex justify-center">
				<div>Frontend Portfolio</div>
			</div>
			<ul className="absolute top-20 w-screen flex justify-center border-t-20 gap-x-5 tablet:gap-x-10 laptop:gap-x-72 font-bold">
				<li>Skills</li>
				<li>Projects</li>
				<li>Education</li>
			</ul>
		</header>
	);
};
