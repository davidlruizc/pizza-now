declare interface IOrdersListReducer {
  orders: IOrder[] | null;
}

declare interface IOrder {
  name: string;
  pizzaName: string;
  date: Date;
  phone: number;
  price: string;
  ingredients: IIngredients;
}

declare interface IIngredients {
  pepperoni: number;
  chicken: number;
  cheese: number;
  ham: number;
  bacon: number;
  chorizo: number;
  sausage: number;
  jalapeño: number;
  olives: number;
  tomato: number;
  chili: number;
  mustard: number;
  pineapple: number;
  corn: number;
  egg: number;
  mass: number;
}
