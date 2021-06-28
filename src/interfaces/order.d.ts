declare interface IOrdersListReducer {
  orders: IOrder[];
}

declare interface IOrder {
  name: string;
  pizzaName: string;
  date: Date;
  phone: number;
  price: number;
  ingredients: IIngredientsSelection[];
  image: string;
}
