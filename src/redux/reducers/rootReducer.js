import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { history } from '../../utils/history';
import userReducer from './userReducer';
import appReducer from './appReducer';
import playlistsReducer from './playlistsReducer';

const rootReducer = combineReducers({
    router: connectRouter(history),
    user: userReducer,
    app: appReducer,
    playlists: playlistsReducer
});

export default rootReducer;