import { defineStore, StoreDefinition } from 'pinia'
import { IpType } from "@/types/IpType";
import { IpService } from "@/services";
import { ref, Ref } from "vue"

const ipService: IpService = IpService.initService();

export const useIpStore: StoreDefinition = defineStore('ip', () => {
  const ipList: Ref<IpType[]> = ref([]);

  function setIpList(): void {
    ipList.value = ipService.ipList;
  }

  async function create(ipAddress: string): Promise<void> {
    await ipService
        .createIpRecord(ipAddress);
    ipService.saveIpList();

    setIpList();
  }
  function read(): void {
    ipService.setIpList();

    setIpList();
  }
  function remove(ipRecordsIndexes: number[]): void {
    ipService
        .removeIpRecordsByIndexes(ipRecordsIndexes);

    ipService.saveIpList();

    setIpList();
  }
  function search(searchQuery: string): void {
    ipService
        .searchIpRecords(searchQuery)

    setIpList();
  }

  return { ipList, create, read, remove, search }
})