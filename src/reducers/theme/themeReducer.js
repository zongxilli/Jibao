import { initialState } from './initialState';

const themeReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'SWITCH_THEME':
			return {
				...state,
				name: payload,
			};

		default:
			return state;
	}
};

export default themeReducer;
