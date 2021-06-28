import { expect, test } from '@jest/globals';
import { setPizzaOrder } from 'actions/redux/pizzaOrderAction';
import pizzaReducer from './pizza.reducer';

const mockPizza: IOrder = {
  date: new Date(),
  name: 'David Leonardo Ruiz Carreño',
  phone: 312312312,
  pizzaName: 'Pizza Loca',
  price: 52000,
  ingredients: [
    { id: 1, ingredient: 'Pepperoni', price: 4500, quantity: 2 },
    { id: 2, ingredient: 'Pollo', price: 5000, quantity: 3 },
    { id: 3, ingredient: 'Queso', price: 4500, quantity: 0 },
    { id: 4, ingredient: 'Jamón', price: 3000, quantity: 0 },
    { id: 5, ingredient: 'Tocineta', price: 3000, quantity: 0 },
    { id: 6, ingredient: 'Chorizo', price: 3000, quantity: 0 },
    { id: 7, ingredient: 'Salchicha', price: 3000, quantity: 0 },
    { id: 8, ingredient: 'Jalapeños', price: 3000, quantity: 3 },
    { id: 9, ingredient: 'Aceitunas', price: 3000, quantity: 0 },
    { id: 10, ingredient: 'Tomates', price: 3000, quantity: 0 },
    { id: 11, ingredient: 'Chile', price: 3000, quantity: 0 },
    { id: 12, ingredient: 'Mostaza', price: 3000, quantity: 0 },
    { id: 13, ingredient: 'Piña', price: 3000, quantity: 0 },
    { id: 14, ingredient: 'Maíz', price: 3000, quantity: 0 },
    { id: 15, ingredient: 'Huevo', price: 3000, quantity: 3 },
    { id: 16, ingredient: 'Masa', price: 10000, quantity: 1, disabled: true },
  ],
  image:
    'https://images.unsplash.com/photo-1552539618-7eec9b4d1796?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=733&q=80',
};

describe('Pizza Reducer', () => {
  test('Initial state', () => {
    expect(pizzaReducer({}, '')).toEqual({});
  });

  test('add order list', () => {
    expect(pizzaReducer({ orders: [] }, setPizzaOrder(mockPizza))).toEqual({ orders: [mockPizza] });
  });
});
