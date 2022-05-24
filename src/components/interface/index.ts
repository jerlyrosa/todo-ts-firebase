export interface FormInterface {
  useremailaddress: { value: string };
  userpassword: { value: string };
}

export interface modelDataBase {
  description: string;
  url: string;
}

 export   interface modelTaskData {
  readonly id: string;
  description: string;
  url: string;
}