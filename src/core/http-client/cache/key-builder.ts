import { AxiosRequestConfig } from 'axios';


const _ = JSON.stringify;


export class KeyBuilder {
  public static buildKey(
    url?: string,
    requestParams?: AxiosRequestConfig['params'],
    data?: AxiosRequestConfig['data'],
    headers?: AxiosRequestConfig['headers'],
    keyPrefix: string = 'SENLER-SDK-CACHE',
  ): string {
    return [
      keyPrefix,
      url,
      _(requestParams),
      _(data),
      _(headers),
    ].join(":")
  };
}