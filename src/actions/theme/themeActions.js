export const changeTheme = (themeName) => (dispatch) => {
	dispatch({
		type: 'SWITCH_THEME',
		payload: themeName,
	});
};
