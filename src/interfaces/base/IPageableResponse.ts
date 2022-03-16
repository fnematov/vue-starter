import { ITableResponse } from '@/interfaces';

export interface IPageableResponse<T> extends ITableResponse<T> {
  totalPages: number;
}
