import { combineReducers } from 'redux';
import Coins from './coins';
import User from './user';
import Goal from './goal';

const reducers = combineReducers({
  coins: Coins,
  user: User,
  goal: Goal,
});

export default reducers;
