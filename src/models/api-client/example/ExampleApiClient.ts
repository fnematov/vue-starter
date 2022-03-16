import {
  IExampleApiClient,
  IExampleApiClientUrls,
  IExampleFilterParams,
  IExampleItem,
  IHttpRequestParams,
} from '@/interfaces';
import { HttpClient } from '@/models';

export class ExampleApiClient implements IExampleApiClient {
  private readonly urls!: IExampleApiClientUrls;

  constructor(urls: IExampleApiClientUrls) {
    this.urls = urls;
  }

  fetchItems(params?: IExampleFilterParams): Promise<IExampleItem[]> {
    const requestParams: IHttpRequestParams = {
      url: this.urls.fetchItems,
      params,
    };
    return HttpClient.get<IExampleItem[]>(requestParams);
  }
}
