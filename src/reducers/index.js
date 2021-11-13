import shoppingListReducer from './shoppingList';
import { combineReducers } from 'redux';

// All reducers are grouped here
const reducers = combineReducers({
    shoppingList: shoppingListReducer
});

export default reducers;