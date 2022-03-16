import { IExampleItem, ITableResponse } from '@/interfaces';
import { onBeforeMount, reactive } from 'vue';
import { apiClient } from '@/models';

export function useExample(): { items: ITableResponse<IExampleItem>, fetchItems: () => void } {
  const state = reactive<ITableResponse<IExampleItem>>({
    items: [],
  });

  const fetchItems = async () => {
    state.items = await apiClient.example.fetchItems();
  };

  onBeforeMount(async () => {
    await fetchItems();
  });

  return {
    items: state,
    fetchItems,
  };
}
