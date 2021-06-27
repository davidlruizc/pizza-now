import { Ingredients } from 'constants/ingredients';

export const UPDATE_INGREDIENTS = 'UPDATE_INGREDIENTS';

export interface IUpdateIngredients {
  type: typeof UPDATE_INGREDIENTS;
  payload: IIngredientsSelection;
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

export const initialState: IIngredientsSelectionReducer = { ingredients: Ingredients };

export type IIngredientsActionType = IUpdateIngredients;

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
    default:
      return state;
  }
};

export default IngredientsReducer;
