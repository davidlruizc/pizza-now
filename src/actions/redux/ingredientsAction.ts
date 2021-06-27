import { IUpdateIngredients, UPDATE_INGREDIENTS } from 'states/reducers/ingredients.reducer';

export const UpdateIngredients = (ingredient: IIngredientsSelection): IUpdateIngredients => ({
  type: UPDATE_INGREDIENTS,
  payload: ingredient,
});
