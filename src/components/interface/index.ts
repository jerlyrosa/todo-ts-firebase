export interface FormInterface {
  useremailaddress: { value: string };
  userpassword: { value: string };
}

export interface modelDataBase {
  tasks: [];
}

export interface modelTaskData {
  readonly id: string;
  description: string;
  url: string;
}
