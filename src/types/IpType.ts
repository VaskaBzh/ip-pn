import { StatusEnum } from "@/enums/StatusEnum";

export type IpType = {
  ip: string;
  city: string;
  country: string;
  status: StatusEnum;
}