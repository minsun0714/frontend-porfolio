import { create } from "zustand";
import { MaterialCard, Skills } from "@/models/skills";

type SkillStore = {
	skillsList: Skills[];
	setSkillsList: (skillsList: Skills[]) => void;
	id: number;
	setId: (id: number) => void;
	studyMaterialCards: () => MaterialCard[] | undefined;
};

export const useSkillStore = create<SkillStore>()((set, get) => ({
	skillsList: [],
	setSkillsList: (skillsList: Skills[]) => set({ skillsList }),
	id: 0,
	setId: (newId: number) => set({ id: newId }),
	studyMaterialCards: () =>
		get()
			.skillsList.flatMap((skill) => skill.list)
			.find((card) => card.id === get().id)?.materialUrlList,
}));
