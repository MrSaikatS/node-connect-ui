import { atomWithStorage } from "jotai/utils";

export const darkAtom = atomWithStorage<boolean>("darkMode", true);

export const fakeApiDelay = async (ms: number) => {
  await new Promise<void>((resolve) => setTimeout(resolve, ms));
};
