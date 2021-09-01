/* eslint-disable no-unused-vars */
import { updateCoins, updateUser, updateGoals } from '../Redux/Actions';
import userReducer from '../Redux/Reducers/user';
import coinReducer from '../Redux/Reducers/coins';
import goalReducer from '../Redux/Reducers/goal';

describe('Redux', () => {
  it('returns the initial user state', () => {
    expect(userReducer(undefined, {})).toEqual({
      user: [],
    });
  });

  it('returns the initial coin state', () => {
    expect(coinReducer(undefined, {})).toEqual({
      coins: [],
    });
  });

  it('returns the initial goal state', () => {
    expect(goalReducer(undefined, {})).toEqual({
      goals: [],
    });
  });

  it('updates the current user information', () => {
    expect(userReducer({}, updateUser('user-data'))).toEqual({
      user: 'user-data',
    });
  });

  it('updates the correct coin information', () => {
    expect(coinReducer({}, updateCoins('goal-data'))).toEqual({
      coins: 'goal-data',
    });
  });
});
