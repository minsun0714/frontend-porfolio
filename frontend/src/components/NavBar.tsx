import debounce from "lodash/throttle";
import { useEffect, useState, useCallback } from "react";

export const Navbar = () => {
	const [showHeader, setShowHeader] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);
	const [activeTab, setActiveTab] = useState<string>("main-section");
	const [isScrolling, setIsScrolling] = useState(false);

	const handleScroll = useCallback(() => {
		if (isScrolling) return;
		if (window.scrollY > lastScrollY) {
			setShowHeader(false);
		} else {
			setShowHeader(true);
		}
		setLastScrollY(window.scrollY);
	}, [lastScrollY, isScrolling]);

	const detectActiveSection = useCallback(() => {
		if (isScrolling) return
		const sections = [
			"main-section",
			"skills-section",
			"projects-section",
			"education-section",
		];
		for (const id of sections) {
			const section = document.getElementById(id);
			if (section) {
				const { top, bottom } = section.getBoundingClientRect();
				if (top < window.innerHeight / 2 && bottom > window.innerHeight / 2) {
					setActiveTab(id);
					break;
				}
			}
		}
	}, [isScrolling]);

	useEffect(() => {
		const throttledScrollHandler = debounce(() => {
			if (!isScrolling) {
				handleScroll();
				detectActiveSection();
			}
		}, 300);

		window.addEventListener("scroll", throttledScrollHandler);

		return () => {
			window.removeEventListener("scroll", throttledScrollHandler);
		};
	}, [handleScroll, detectActiveSection, isScrolling]);

	const scrollToSection = (id: string) => {
		setIsScrolling(true);
		setShowHeader(false);
		const section = document.getElementById(id);

		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
			setActiveTab(id);
		}

		setTimeout(() => {
			setIsScrolling(false);
		}, 1000);
	};

	return (
		<header
			className={`z-50 h-32 w-screen flex items-center bg-white text-black font-extrabold fixed transition-transform duration-300 ${
				showHeader ? "translate-y-0" : "-translate-y-1/2"
			}`}
		>
			<div
				className={`absolute top-5 w-screen flex justify-center transition-opacity duration-300 ${
					showHeader ? "opacity-100" : "opacity-0"
				}`}
				onClick={() => {
					if (isScrolling) return;
					scrollToSection("main-section");
				}}
			>
				<div>Frontend Portfolio</div>
			</div>
			<ul className="absolute top-20 w-screen flex justify-center border-t-20 gap-x-5 tablet:gap-x-24 laptop:gap-x-72 font-bold">
				<li
					onClick={() => {
						if (isScrolling) return;
						scrollToSection("skills-section");
					}}
					className={`cursor-pointer ${
						activeTab === "skills-section" ? "border-b-2 border-blue-500" : ""
					}`}
				>
					Skills
				</li>
				<li
					onClick={() => {
						if (isScrolling) return;
						scrollToSection("projects-section");
					}}
					className={`cursor-pointer ${
						activeTab === "projects-section" ? "border-b-2 border-blue-500" : ""
					}`}
				>
					Projects
				</li>
				<li
					onClick={() => {
						if (isScrolling) return;
						scrollToSection("education-section");
					}}
					className={`cursor-pointer ${
						activeTab === "education-section"
							? "border-b-2 border-blue-500"
							: ""
					}`}
				>
					Education
				</li>
			</ul>
		</header>
	);
};
