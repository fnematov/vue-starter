import { IExampleFilterParams, IExampleItem } from '@/interfaces';

export interface IExampleApiClient {
  fetchItems: (params?: IExampleFilterParams) => Promise<IExampleItem[]>;
}
