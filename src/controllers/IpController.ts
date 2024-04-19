import { IpService } from "@/services";
import { IpControllerContract } from "./contracts/IpControllerContract";
import { IpServiceContract } from "@/services/contracts/IpServiceContract"

export class IpController implements IpControllerContract {
  service: IpServiceContract;

  constructor(ipService: typeof IpService = IpService) {
    this.service = ipService.initService();
  }

  public async create(ipAddress: string): Promise<void> {
    await this.service
      .createIpRecord(ipAddress)

    this.service.saveIpList();
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