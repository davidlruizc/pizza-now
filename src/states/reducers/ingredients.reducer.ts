import { Ingredients } from 'constants/ingredients';
import { RandomPizzaImage } from 'utils';

export const UPDATE_INGREDIENTS = 'UPDATE_INGREDIENTS';
export const SET_FINAL_PRICE = 'SET_FINAL_PRICE';
export const SET_DEFAULT_INGREDIENTS = 'SET_DEFAULT_INGREDIENTS';

export interface IUpdateIngredients {
  type: typeof UPDATE_INGREDIENTS;
  payload: IIngredientsSelection;
}

export interface ISetFinalPrice {
  type: typeof SET_FINAL_PRICE;
  payload: number;
}

export interface ISetDefaultIngredients {
  type: typeof SET_DEFAULT_INGREDIENTS;
}

function updateIngredientsList(
  fullList: IIngredientsSelection[],
  toUpdate: IIngredientsSelection
): IIngredientsSelection[] {
  return fullList.map((item) => {
    if (item.id !== toUpdate.id) {
      return item;
    }

    return {
      ...item,
      ...toUpdate,
    };
  });
}

export const initialState: IIngredientsSelectionReducer = {
  ingredients: Ingredients,
  finalPrice: 0,
  image: RandomPizzaImage(),
};

export type IIngredientsActionType = IUpdateIngredients | ISetFinalPrice | ISetDefaultIngredients;

const IngredientsReducer = (
  state: IIngredientsSelectionReducer = initialState,
  action: IIngredientsActionType
): IIngredientsSelectionReducer => {
  switch (action.type) {
    case UPDATE_INGREDIENTS:
      return {
        ...state,
        ingredients: updateIngredientsList(state.ingredients, action.payload),
      };
    case SET_FINAL_PRICE:
      return { ...state, finalPrice: action.payload };
    case SET_DEFAULT_INGREDIENTS:
      return { ...initialState };
    default:
      return state;
  }
};

export default IngredientsReducer;
