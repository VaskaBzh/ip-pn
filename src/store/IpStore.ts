import { defineStore } from 'pinia'
import { IpType } from "@/types/IpType.ts";
import { IpService } from "@/services";

const ipService = new IpService();

export const useIpStore = defineStore('ip', {
  state: (): { ipList: IpType[] } => ({
    ipList: [],
  }),
  getters: {
    getIpList(state): IpType[] {
      return state.ipList
    },
  },
  actions: {
    setIpList(): void {
      this.ipList = ipService.ipList;
    },
    async create(ipAddress: string): Promise<void> {
      await ipService
        .createIpRecord(ipAddress);
      ipService.saveIpList();

      this.setIpList();
    },
    read(): void {
      ipService.setIpList();

      this.setIpList();
    },
    remove(ipRecordsIndexes: number[]): void {
      console.log(ipRecordsIndexes)
      ipService
        .removeIpRecordsByIndexes(ipRecordsIndexes);

      ipService.saveIpList();

      this.setIpList();
    },
    search(searchQuery: string): void {
      ipService
        .searchIpRecords(searchQuery)

      this.setIpList();
    }
  },
})