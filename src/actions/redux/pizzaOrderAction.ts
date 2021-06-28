import { ISetOrder, SET_ORDER } from 'states/reducers/pizza.reducer';

export const setPizzaOrder = (order: IOrder): ISetOrder => ({
  type: SET_ORDER,
  payload: order,
});
