import { IpModel, IpModelDeclare } from "@/models";
import { IpClient } from "@/api";
import { SecureResponseType } from "@/types/ResponseType";
import { IpClientContract } from "@/api/clients/contracts/IpClientContract";
import { IpData } from "@/DTO";
import { ResponseTrait } from "@/traits/ResponseTrait";
import { IpType } from "@/types/IpType";
import { IpServiceContract } from "@/services/contracts/IpServiceContract";

export class IpService implements IpServiceContract {
  client: IpClientContract;
  ipModel: IpModelDeclare;

  protected constructor(
    client: typeof IpClient = IpClient,
    ipModel: typeof IpModel = IpModel
  ) {
    this.client = new client();
    this.ipModel = new ipModel();
  }

  get ipList(): IpType[] {
    return this.ipModel.ipList;
  }

  public async createIpRecord(ipAddress: string): this {
    const response: SecureResponseType = await this.client.checkIp(ipAddress);

    this.ipModel.ipList.push(new IpData(ResponseTrait.getResponseData(response)));

    return this;
  }

  public saveIpList(): void {
    // Для тестового будет достаточно localStorage)
    localStorage.setItem("ipList", JSON.stringify(this.ipList));
  }

  private getSavedIpList(): IpType[] {
    return JSON.parse(localStorage.getItem("ipList")) ?? [];
  }

  public setIpList(): void {
    this.ipModel.ipList = this.getSavedIpList();
  }

  public removeIpRecordsByIndexes(ipRecordsIndexes: number[]): this {
    ipRecordsIndexes.forEach((index: number): void => {
      this.ipModel.ipList.splice(index, 1)
    })

    return this;
  }

  public searchIpRecords(searchQuery: string): this {
    const query: string = searchQuery.toLowerCase().trim();

    if (!query) {
      this.setIpList();

      return this;
    }

    this.ipModel.ipList = this.getSavedIpList()
      .map((ipRecord: IpType): IpType | null => {
        const filteredIpList = ipRecord.ip.toLowerCase().includes(query);

        return filteredIpList ? ipRecord : null;
      })
      .filter((bool: IpType | null) => bool)

    return this;
  }

  public static initService(
    client: typeof ipClient = ipClient,
    ipModel: typeof IpModel = IpModel
  ) {
    return new IpService(client, ipModel);
  }
}