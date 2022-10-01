import {atom} from "recoil"
import { PugaMovie } from "../typing"
import { DocumentData } from "firebase/firestore"


export const modalState = atom({
    key: "modalState",
    default: false
})

export const movieState = atom<PugaMovie|DocumentData|null>({
    key: "movieState",
    default: null
})