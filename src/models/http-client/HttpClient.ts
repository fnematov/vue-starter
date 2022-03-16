import { IHttpClient } from '@/interfaces';
import { HttpClientModel } from '@/models/http-client/HttpClientModel';

export const HttpClient: IHttpClient = new HttpClientModel();
