import { createStore, combineReducers, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import placeReducer from './reducers'; // Ensure the reducer path is correct

const rootReducer = combineReducers({
  places: placeReducer, // Ensure 'placeReducer' is correctly imported
});

export const store = createStore(rootReducer); // Ensure this export is correct

export type RootState = ReturnType<typeof rootReducer>;
