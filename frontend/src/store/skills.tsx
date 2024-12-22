import { create } from "zustand";
import { Skills } from "@/models/skills";

type SkillStore = {
	skillsList: Skills[];
	setSkillsList: (skillsList: Skills[]) => void;
	id: number;
	setId: (id: number) => void;
};

export const useSkillStore = create<SkillStore>()((set) => ({
	skillsList: [],
	setSkillsList: (skillsList: Skills[]) => set({ skillsList }),
	id: 0,
	setId: (newId: number) => set({ id: newId }),
}));
