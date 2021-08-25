import { combineReducers } from 'redux';
import Coins from './coins';
import User from './user';

const reducers = combineReducers({
  coins: Coins,
  user: User,
});

export default reducers;
