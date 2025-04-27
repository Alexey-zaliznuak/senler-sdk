import { AxiosDefaults, AxiosInstance, AxiosRequestConfig } from 'axios';

type CachedParameters = 'headers' | 'params' | 'data';

const _ = JSON.stringify;

export class KeyBuilder {
  public static buildKey(url?: string, requestParams?: Pick<AxiosRequestConfig, CachedParameters>, axios?: AxiosInstance, keyPrefix: string = 'SENLER-SDK-CACHE'): string {
    const axiosInstanceParams = this._getAxiosInstanceParams(axios);

    return [keyPrefix, url, _(requestParams), _(axiosInstanceParams)].join(':');
  }

  protected static _getAxiosInstanceParams(axios?: AxiosInstance): Pick<AxiosDefaults, CachedParameters> | {} {
    if (!axios) return {};

    return {
      headers: axios.defaults.headers,
      params: axios.defaults.params,
      data: axios.defaults.data,
    };
  }
}
