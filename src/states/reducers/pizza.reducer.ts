export const SET_ORDER = 'SET_ORDER';

export interface ISetOrder {
  type: typeof SET_ORDER;
  payload: IOrder;
}

export const initialState: IOrdersListReducer = { orders: null };

export type IOrderActionType = ISetOrder;

const orderReducer = (
  state: IOrdersListReducer = initialState,
  action: IOrderActionType
): IOrdersListReducer => {
  switch (action.type) {
    case SET_ORDER:
      return {
        ...state,
        orders: state.orders && [...state.orders, action.payload],
      };
    default:
      return state;
  }
};

export default orderReducer;
