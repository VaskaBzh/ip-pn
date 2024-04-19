import { SecureResponseType } from "@/types/ResponseType";

export interface IpClientContract {
  checkIp(ip: string): Promise<SecureResponseType>
}