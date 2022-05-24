import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState, useCallback } from "react";
import { db } from "../../config/firebase";
import { modelTaskData } from "../interface/index";
import { UserEmail } from "../types/types";

export const useMethodFireStore = ({ userEmail }: UserEmail) => {
  const COLLECTION: string = "user";

  const [docsData, setDocsData] = useState<modelTaskData[]>([]);

  const fakeData = { id: "userdefaul", description: "default task ", url: "/" };

  useEffect(() => {
    const GetData = (): void => {
      onSnapshot(collection(db, COLLECTION), (doc) => {
        const data = doc.docs.map((doc) => [doc.id, doc.data()]);
        const docdata: modelTaskData[] = [];

        data.map((item) => {
          const { description, url } = item[1] as modelTaskData;
          const id: string = item[0] as string;

          if (id === userEmail) {
            docdata.push({
              id: id,
              description: description as string,
              url: url as string,
            });
          } else {
            docdata.push(fakeData);
          }
          return 0;
        });

        setDocsData(docdata);
      });
    };
    GetData();
  }, [fakeData, userEmail]);

  return {
    docsData,
  } as const;
};
