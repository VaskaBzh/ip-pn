import { IpType } from "@/types/IpType";
import { StatusEnum } from "@/enums";
import { getEnumValue } from "@/utils";

export class IpData implements IpType {
  ip: string;
  city: string;
  country: string;
  countryIcon: string;
  status: StatusEnum;

  constructor(
    ipRecord: { [key: string]: string }
  ) {
    this.city = ipRecord.city ?? "Unknown";
    this.country = ipRecord.country ?? "Unknown";
    this.countryIcon = ipRecord.countryCode?.toLowerCase() ?? "";
    this.ip = ipRecord.query;
    this.status = getEnumValue(StatusEnum, ipRecord.status, StatusEnum.pending);
  }
}