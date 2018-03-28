import {createStore} from 'redux';
import { combineReducers } from 'redux';

import { userReducer } from './user/reducers';
import { tweetReducer } from './tweet/reducers';

const Reducers = combineReducers({
  userState: userReducer,
  tweetState: tweetReducer
});

export const Store = createStore(Reducers);