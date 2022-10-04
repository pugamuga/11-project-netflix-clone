import { collection, DocumentData, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import { Movie, PugaMovie } from "../typing";

export default function useList(
  uid: string | undefined
): PugaMovie[] | DocumentData[] {
  const [list, setList] = useState<PugaMovie[] | DocumentData[]>([]);

  useEffect(() => {
    if (!uid) {
      return;
    }

    return onSnapshot(collection(db, "customers", uid, "myList"), (snap) => {
      setList(
        snap.docs.map((item) => ({
          id: item.id,
          ...item.data(),
        }))
      );
    });
  }, [db, uid]);

  return list;
}
