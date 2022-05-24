import { getAuth } from "firebase/auth";
import {
  collection,
  onSnapshot,
  setDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { useEffect, useState, useCallback } from "react";
import { db } from "../../config/firebase";
import { modelTaskData } from "../interface/index";
import { UserEmail } from "../types/types";

export const useMethodFireStore = ({ userEmail }: UserEmail) => {
  const COLLECTION: string = "user";

  const [docsData, setDocsData] = useState<modelTaskData[]>([]);

  const fakeData = { id: "id_defaul", description: "Default Task ", url: "/" };

  useEffect(() => {
    onSnapshot(collection(db, COLLECTION), (docCollection) => {
      const data = docCollection.docs.map((doc) => [doc.id, doc.data()]);
      const docdata: modelTaskData[] = [];

      data
        .filter((item) => item[0] === userEmail)
        .map((item) => {
          const idUserColllection: string = item[0] as string;
          console.log(idUserColllection);
          const { description, url, id } = item[1] as modelTaskData;
          if (idUserColllection === userEmail) {
            console.log(id);
            docdata.push({
              id: id,
              description: description as string,
              url: url as string,
            });
          }
        });

      if (docdata.length === 0) {
        setDoc(doc(db, COLLECTION, userEmail), fakeData);
      }
      setDocsData(docdata);
    });
  }, []);

  const deleteDocCompled = async (id: string): Promise<void> => {
    await deleteDoc(doc(db, COLLECTION, id))
      .then(() => {
        console.log("File delete");
      })
      .catch((error) => {
        console.error("Delete failed", error);
      });
  };

  return {
    docsData,
    deleteDocCompled,
  } as const;
};
