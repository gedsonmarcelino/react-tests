import {createStore} from 'redux';
import { combineReducers } from 'redux';

import { userReducer } from './user/reducers';

const Reducers = combineReducers({
  userState: userReducer
});

export const Store = createStore(Reducers);