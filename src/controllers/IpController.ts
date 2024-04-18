import { IpService, IpServiceContract } from "@/services";
import { IpControllerContract } from "./contracts";

export class IpController implements IpControllerContract {
  service: IpServiceContract;

  constructor(ipService: typeof IpService = IpService) {
    this.service = new ipService();
  }

  public async create(ipAddress: string): Promise<void> {
    await this.service
      .createIpRecord(ipAddress)
      .saveIpList();
  }

  public read(): void {
    this.service.setIpList();
  }

  public delete(ipRecordsIndexes: number[]): void {
    this.service
      .removeIpRecordsByIndexes(ipRecordsIndexes)
      .saveIpList();
  }
}