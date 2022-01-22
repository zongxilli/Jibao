import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../actions/theme/themeActions';

const useThemeSwitch = () => {
	const dispatch = useDispatch();
	const { name } = useSelector((state) => state.theme);

	const switchTheme = () => {
		dispatch(changeTheme(name === 'light' ? 'dark' : 'light'));
	};

	return switchTheme;
};

export default useThemeSwitch;
