import { IpModelDeclare } from "./declare/IpModelDeclare";
import { IpType } from "@/types/IpType";

export class IpModel implements IpModelDeclare {
  public ipList: IpType[] = [];
}