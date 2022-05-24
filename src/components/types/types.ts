import { modelTaskData } from "../interface/index";

export type PropsChildrenType = {
  children: JSX.Element[] | JSX.Element;
};

export type PropsTaskData = {
  dataList: modelTaskData[];
};

export type UserEmail = {
    userEmail: string;
  };