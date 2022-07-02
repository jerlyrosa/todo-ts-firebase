import { getAuth } from "firebase/auth";
import { v4 as uuidv4 } from "uuid";

import {
  collection,
  onSnapshot,
  setDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { SyntheticEvent, useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { modelDataBase, modelTaskData } from "../interface/index";

export const useMethodFireStore = () => {
  const COLLECTION: string = "user";

  const userEmail = getAuth().currentUser?.email as string;

  const [docsData, setDocsData] = useState<modelDataBase>();

  const ref = doc(db, COLLECTION, userEmail);

  useEffect(() => {
    onSnapshot(collection(db, COLLECTION), (docCollection) => {
      const data = docCollection.docs.map((doc) => [doc.id, doc.data()]);
      let docdata: modelDataBase = { tasks: [] };

      const data2 = data.filter((item) => item[0] === userEmail);
      const fakeData = [
        {
          id: "id_defaul",
          title: "Default Task",
          description: "This is the default task description",
        },
      ];

      if (data2[0]?.length) {
        data2.map((item) => {
          const idUserColllection: string = item[0] as string;
          const tasks = item[1] as modelDataBase;
          if (idUserColllection === userEmail) {
            docdata = tasks;
          }
          return true;
        });
      } else {
        setDoc(doc(db, COLLECTION, userEmail), { tasks: [...fakeData] });
      }
      setDocsData(docdata);
    });
  }, [userEmail]);

  const addFirebase = async (e: SyntheticEvent): Promise<void> => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      name: { value: string };
      decription: { value: string };
    };
    let nameTask: string = target.name.value;
    let decriptionTak: string = !target.decription?.value
      ? "Default  Deescription"
      : target.decription.value;

    const tasks = [
      {
        id: uuidv4(),
        title: nameTask,
        description: decriptionTak,
      },
    ];

    docsData?.tasks.map((item) => {
      tasks.push(item);
      return true;
    });

    await setDoc(doc(db, COLLECTION, userEmail), { tasks })
      .then(() => {
        console.log("File available");
      })
      .catch((error) => {
        console.error("Upload failed", error);
      });
  };

  const updateFirebase = async (
    e: SyntheticEvent,
    { ...props }
  ): Promise<void> => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      name: { value: string };
      decription: { value: string };
    };
    let nameTask: string = target.name.value;
    let decriptionTaks: string = target.decription.value;

    docsData?.tasks.map((item: modelTaskData) => {
      if (item.id === props.data.id) {
        item.title = nameTask;
        item.description = decriptionTaks;
      }

      return true;
    });

    const tasks = docsData?.tasks;

    await setDoc(doc(db, COLLECTION, userEmail), { tasks })
      .then(() => {
        console.log("File available");
      })
      .catch((error) => {
        console.error("Upload failed", error);
      });
  };

  const deleteDocCompled = async (id: string): Promise<void> => {
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
    addFirebase,
    updateFirebase,
  } as const;
};
