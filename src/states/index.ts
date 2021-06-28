import { combineReducers } from 'redux';
import IngredientsReducer from './reducers/ingredients.reducer';
import orderReducer from './reducers/pizza.reducer';

const rootReducer = combineReducers({
  orderReducer: orderReducer,
  IngredientsReducer: IngredientsReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
