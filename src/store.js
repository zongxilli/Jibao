import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import themeReducer from './reducers/theme/themeReducer';

const reducer = combineReducers({
	theme: themeReducer,
});

const initialState = {};

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(thunk))
);

export default store;
