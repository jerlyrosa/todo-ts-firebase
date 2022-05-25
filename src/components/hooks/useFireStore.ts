import { getAuth } from "firebase/auth";
import {
  collection,
  onSnapshot,
  setDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { modelDataBase, modelTaskData } from "../interface/index";

export const useMethodFireStore = () => {
  const COLLECTION: string = "user";

  const userEmail = getAuth().currentUser?.email as string;

  const [docsData, setDocsData] = useState<modelDataBase>();

  const fakeData = [
    { id: "id_defaul", description: "Default Task ", url: "/" },
  ];

  useEffect(() => {
    onSnapshot(collection(db, COLLECTION), (docCollection) => {
      const data = docCollection.docs.map((doc) => [doc.id, doc.data()]);
      let docdata: modelDataBase = { tasks: [] };

      data
        .filter((item) => item[0] === userEmail)
        .map((item) => {
          const idUserColllection: string = item[0] as string;
          const tasks = item[1] as modelDataBase;

          if (idUserColllection === userEmail) {
            docdata = tasks;
          }
        });

      if (docdata.tasks.length === 0) {
        setDoc(doc(db, COLLECTION, userEmail), { tasks: [...fakeData] });
      }
      setDocsData(docdata);
    });
  }, []);

  const deleteDocCompled = async (id: string): Promise<void> => {
    const ref = doc(db, COLLECTION, userEmail);

    const dataFilter = docsData?.tasks.filter(
      (item: modelTaskData) => item.id !== id
    );
    await updateDoc(ref, {
      tasks: dataFilter,
    })
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
