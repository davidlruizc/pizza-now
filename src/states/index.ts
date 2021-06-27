import { combineReducers } from 'redux';
import orderReducer from './reducers/pizza.reducer';

const rootReducer = combineReducers({
  orderReducer: orderReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
