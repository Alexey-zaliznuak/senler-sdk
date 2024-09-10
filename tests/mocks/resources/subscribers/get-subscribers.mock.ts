import { GetSubscribersResponse } from "../../../../src/resources/subscribers/dto/get.dto";
import { SourceType } from "../../../../src/resources/subscribers/dto/subscriber.subscription.dto";
import { BaseResponse } from "../../../../src/types";
import { buildSuccessResponse } from "../../../utils";


export const getSubscribersMock: BaseResponse<GetSubscribersResponse> = buildSuccessResponse({
  offset_id: "5c6992770b295058e641bb86",
  items: [
    {
      date: "27.11.2018 10:00:00",
      vk_user_id: 1,

      ignore: 0,

      first_name: "John",
      last_name: "Doe",

      photo: "https://sun6-6.userapi.com",

      subscriptions: [
        {
          date: "27.11.2018 10:00:00",
          subscription_id: 1,
          source: SourceType.API,
        }
      ],
      utms: [
        {
          utm_id:  123,
          utm_source: "vk",
          utm_medium: "cpc",
          utm_campaign: "skid_ko_karte",
          utm_content: "banner",
          utm_term: "order a chair online",
        }
      ],
      vars: [
        {
          n: "age",
          v: "30",
        }
      ],
    },
  ],
})
