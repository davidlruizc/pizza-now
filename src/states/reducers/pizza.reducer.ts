export const SET_ORDER = 'SET_ORDER';

export interface ISetOrder {
  type: typeof SET_ORDER;
  payload: IOrder;
}

function insertOrder(array: IOrder[], action: IOrder) {
  let newArray = array.slice();
  newArray.splice(action.phone, 0, action);
  return newArray;
}

export const initialState: IOrdersListReducer = { orders: [] };

export type IOrderActionType = ISetOrder;

const orderReducer = (
  state: IOrdersListReducer = initialState,
  action: IOrderActionType
): IOrdersListReducer => {
  switch (action.type) {
    case SET_ORDER:
      return {
        ...state,
        orders: insertOrder(state.orders, action.payload),
      };
    default:
      return state;
  }
};

export default orderReducer;
