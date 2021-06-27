declare interface IIngredientsSelection {
  id: number;
  ingredient: string;
  price: number;
  quantity: number;
  disabled?: boolean;
}

declare interface IIngredientsSelectionReducer {
  ingredients: IIngredientsSelection[];
  finalPrice: number;
}
