import { connect } from 'react-redux';

import { changeTheme } from '../../actions';
import Home from './home';

const mapStateToProps = (state) => ({
	themeName: state.theme.name,
});

const mapDispatchToProps = (dispatch) => ({
	switchTheme: () => dispatch(changeTheme()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
