import { IExampleApiClient, IExampleApiClientUrls } from '@/interfaces';
import { ExampleApiClient } from '@/models';

const urls: IExampleApiClientUrls = {
  fetchItems: '/example-api/get-all-item',
};

const exampleApiClient: IExampleApiClient = new ExampleApiClient(urls);

export default exampleApiClient;
