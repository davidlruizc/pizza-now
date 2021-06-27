import {
  ISetDefaultIngredients,
  ISetFinalPrice,
  IUpdateIngredients,
  SET_DEFAULT_INGREDIENTS,
  SET_FINAL_PRICE,
  UPDATE_INGREDIENTS,
} from 'states/reducers/ingredients.reducer';

export const UpdateIngredients = (ingredient: IIngredientsSelection): IUpdateIngredients => ({
  type: UPDATE_INGREDIENTS,
  payload: ingredient,
});

export const SetFinalPrice = (price: number): ISetFinalPrice => ({
  type: SET_FINAL_PRICE,
  payload: price,
});

export const SetDefaultIngredients = (): ISetDefaultIngredients => ({
  type: SET_DEFAULT_INGREDIENTS,
});
