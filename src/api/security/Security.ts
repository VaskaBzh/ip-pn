import { ResponseTrait } from "@/traits/ResponseTrait";
import { ResponseType } from "@/types/ResponseType";
import { SecureResponseType } from "@/types/ResponseType";

export async function securitySend(request: () => Promise<ResponseType>): Promise<SecureResponseType> {
  try {
    const response: ResponseType = await request();

    const responseData: ResponseType = ResponseTrait.getResponseData(response as ResponseType);

    if (ResponseTrait.isEmptyResponse(responseData)) {
      console.error('Empty response');
      alert('Status fail')

      return response;
    }

    if (ResponseTrait.isStatusFail(responseData)) {
      console.error('Status fail');
      alert('Status fail')

      return response;
    }

    alert('Все окей!');

    return response;
  } catch (error) {
    throw new Error(`Error with: ${error}`)
    alert(`Error with: ${error}`)

    return null;
  }
}