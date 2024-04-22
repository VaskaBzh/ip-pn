import { ResponseTrait } from "@/traits/ResponseTrait";
import { ResponseType } from "@/types/ResponseType";
import { SecureResponseType } from "@/types/ResponseType";
import { ElMessage } from 'element-plus';

export async function securitySend(request: () => Promise<ResponseType>): Promise<SecureResponseType> {
  try {
    const response: ResponseType = await request();

    const responseData: ResponseType = ResponseTrait.getResponseData(response as ResponseType);

    if (ResponseTrait.isEmptyResponse(responseData)) {
      console.error('Empty response');
      ElMessage({ type: 'error', message: 'Empty response' });

      return response;
    }

    if (ResponseTrait.isStatusFail(responseData)) {
      console.error('Status fail');
      ElMessage({ type: 'error', message: 'Status fail' });

      return response;
    }

    ElMessage({ type: 'success', message: 'Все окей!' });

    return response;
  } catch (error) {
    throw new Error(`Error with: ${error}`)
    ElMessage({ type: 'error', message: `Error with: ${error}` });

    return null;
  }
}