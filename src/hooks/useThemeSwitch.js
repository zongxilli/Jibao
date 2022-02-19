import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../actions';

const useThemeSwitch = () => {
	const dispatch = useDispatch();
	const { mode } = useSelector((state) => state.theme);

	const switchTheme = () => {
		dispatch(changeTheme(mode === 'light' ? 'dark' : 'light'));
	};

	return switchTheme;
};

export default useThemeSwitch;
