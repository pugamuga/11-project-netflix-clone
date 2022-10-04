import { atom } from "recoil";
import { PugaMovie } from "../typing";
import { DocumentData } from "firebase/firestore";

export const modalState = atom({
  key: "modalState",
  default: false,
});

export const movieState = atom<PugaMovie | DocumentData | null>({
  key: "movieState",
  default: null,
});
export const videoPlaying = atom<boolean>({
  key: "videoPlaying",
  default: false,
});
export const signUpAtom = atom<boolean>({
  key: "signUpAtom",
  default: false,
});
