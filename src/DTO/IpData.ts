import { StatusEnum } from "@/enums/StatusEnum.ts";

export class IpData {
  ip: string;
  city: string;
  country: string;
  countryIcon: URL;

  constructor(
    ipRecord: { [key: unknown]: unknown }
  ) {
    this.city = ipRecord.city ?? "Unknown";
    this.country = ipRecord.country ?? "Unknown";
    this.countryIcon = new URL(`@icon/flags/${ipRecord.countryCode}`, import.meta.url);
    this.ip = ipRecord.query;
    this.status = StatusEnum[ipRecord.status];
  }
}