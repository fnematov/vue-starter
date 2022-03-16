import { IHttpClient, IHttpRequestParams } from '@/interfaces';
import { AxiosResponse } from 'axios';
import http from '@/plugins/http';

export class HttpClientModel implements IHttpClient {
  get<T>(parameters: IHttpRequestParams): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const {
        url,
        params,
      } = parameters;

      http.get(url, { params })
        .then((response: AxiosResponse) => {
          resolve(response.data as T);
        })
        .catch((error: AxiosResponse) => {
          console.info('------ rejecting ----');
          reject(error);
        });
    });
  }

  post<T>(parameters: IHttpRequestParams): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const {
        url,
        payload,
      } = parameters;

      http.post(url, payload)
        .then((response: AxiosResponse) => {
          resolve(response.data as T);
        })
        .catch((error: AxiosResponse) => {
          reject(error);
        });
    });
  }

  put<T>(parameters: IHttpRequestParams): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const {
        url,
        payload,
      } = parameters;

      http.put(url, payload)
        .then((response: AxiosResponse) => {
          resolve(response.data as T);
        })
        .catch((error: AxiosResponse) => {
          reject(error);
        });
    });
  }

  delete<T>(parameters: IHttpRequestParams): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const {
        url,
        params,
      } = parameters;

      http.delete(url, { params })
        .then((response: AxiosResponse) => {
          resolve(response.data as T);
        })
        .catch((error: AxiosResponse) => {
          console.info('------ rejecting ----');
          reject(error);
        });
    });
  }
}
