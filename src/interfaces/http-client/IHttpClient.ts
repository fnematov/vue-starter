import { IHttpRequestParams } from '@/interfaces';

export interface IHttpClient {
  get<T>(parameters: IHttpRequestParams): Promise<T>
  post<T>(parameters: IHttpRequestParams): Promise<T>
  put<T>(parameters: IHttpRequestParams): Promise<T>
  delete<T>(parameters: IHttpRequestParams): Promise<T>
}
