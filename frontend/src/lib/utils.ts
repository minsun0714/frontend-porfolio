import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";
import * as ImIcons from "react-icons/im";
import * as LuIcons from "react-icons/lu";
import * as GoIcons from "react-icons/go";
import { IconType } from "react-icons/lib";
import * as SiIcons from "react-icons/si";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

/**
 * 문자열 아이콘 이름을 React 컴포넌트로 매핑
 * @param iconName 아이콘 이름 (예: "Bs1Circle")
 * @returns React 아이콘 컴포넌트 또는 null
 */
export const getIconComponent = (iconName: string): IconType | null => {
	// 모듈별 아이콘 탐색
	const icon =
		(BsIcons[iconName as keyof typeof BsIcons] as IconType) ||
		(GoIcons[iconName as keyof typeof GoIcons] as IconType) ||
		(SiIcons[iconName as keyof typeof SiIcons] as IconType) ||
		(FaIcons[iconName as keyof typeof FaIcons] as IconType) ||
		(AiIcons[iconName as keyof typeof AiIcons] as IconType) ||
		(RiIcons[iconName as keyof typeof RiIcons] as IconType) ||
		(ImIcons[iconName as keyof typeof ImIcons] as IconType) ||
		(LuIcons[iconName as keyof typeof LuIcons] as IconType);

	return icon || null;
};
