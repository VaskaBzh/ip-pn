import { StatusEnum } from "@/enums";

export type IpType = {
  ip: string;
  city: string;
  country: string;
  status: StatusEnum;
  countryIcon: string;
}