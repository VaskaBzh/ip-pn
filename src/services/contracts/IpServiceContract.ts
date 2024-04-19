import { IpClientContract } from "@/api/clients/contracts/IpClientContract";
import { IpModelDeclare } from "@/models/declare/IpModelDeclare";
import { IpType } from "@/types/IpType";

export interface IpServiceContract {
  client: IpClientContract;
  ipModel: IpModelDeclare;
  get ipList(): IpType[];
  saveIpList(): void;
  setIpList(): void;
  createIpRecord(ipAddress: string): Promise<this>;
  removeIpRecordsByIndexes(ipRecordsIndexes: number[]): this;
  searchIpRecords(searchQuery: string): this;
}