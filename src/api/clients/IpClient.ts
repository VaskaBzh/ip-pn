import { securitySend } from "../security/Security";
import { Request } from "../request";
import { BASE_URL } from "../consts";
import { SecureResponseType } from "@/types/ResponseType";
import { IpClientContract } from "./contracts/IpClientContract";
import { BaseClient } from "./BaseClient";

export class IpClient extends BaseClient implements IpClientContract {
  protected baseUrl(): string {
    return BASE_URL;
  }

  public async checkIp(ip: string): Promise<SecureResponseType> {
    console.log()
    return await securitySend(
      this.send.bind(
        this,
        Request.get(`/json/${ip}`)
      )
    );
  }
}