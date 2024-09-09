import { GetSubscribersResponse } from "../../../../src/resources/subscribers/dto/get.dto";
import { BaseResponse } from "../../../../src/types";


export const getSubscribersMock = (): BaseResponse<GetSubscribersResponse> => {
  return {
    success: true,
    offset_id: "5c6992770b295058e641bb86",
    items: [
      
    ],
}
};
