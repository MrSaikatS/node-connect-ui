import { atomWithStorage } from "jotai/utils";

export const darkAtom = atomWithStorage<boolean>("darkMode", true);
