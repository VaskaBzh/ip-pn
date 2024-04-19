import { IpType } from "@/types/IpType";
import { StatusEnum } from "@/enums/StatusEnum";

export class IpData implements IpType {
  ip: string;
  city: string;
  country: string;
  countryIcon: URL;
  status: StatusEnum;

  constructor(
    ipRecord: { [key: string]: string }
  ) {
    this.city = ipRecord.city ?? "Unknown";
    this.country = ipRecord.country ?? "Unknown";
    this.countryIcon = new URL(`@icon/flags/${ipRecord.countryCode}`, import.meta.url);
    this.ip = ipRecord.query;
    this.status = StatusEnum[ipRecord.countryCode as keyof typeof StatusEnum];
  }
}