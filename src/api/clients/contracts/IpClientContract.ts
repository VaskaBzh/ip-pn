import { SecureResponseType } from "@/types/ResponseType";

export interface IpClientContract {
  baseUrl(): string
  checkIp(ip: string): Promise<SecureResponseType>
}