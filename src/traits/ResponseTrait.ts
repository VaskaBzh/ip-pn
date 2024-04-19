import { ResponseType } from "@/types/ResponseType";

export class ResponseTrait {
  static getResponseData(response: ResponseType): ResponseType {
    if (!response?.data) {
      return response;
    }

    if (response?.data) {
      return this.getResponseData(response.data as ResponseType);
    }

    return response;
  }

  static isEmptyResponse(responseData: ResponseType): boolean {
    return responseData.length === 0;
  }

  static isStatusFail(responseData: ResponseType): boolean {
    return responseData.status === "fail"
  }
}