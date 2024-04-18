import { IpClientContract } from "@/api/clients/contracts/IpClientContract";
import { IpModelDeclare } from "@/models";
import { IpType } from "@/types/IpType";

export interface IpServiceContract {
  client: IpClientContract;
  ipModel: IpModelDeclare;
  get ipList(): IpType[];
  saveIpList(): void;
  setIpList(): void;
  createIpRecord(ipAddress: string): Promise<void>;
  removeIpRecordsByIndexes(ipRecordsIndexes: number[]): void;
  searchIpRecords(searchQuery: string): this;
}