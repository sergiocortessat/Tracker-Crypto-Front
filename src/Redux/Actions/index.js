const ALL_COINS = 'ALL_COINS';
const CURRENT_USER = 'CURRENT_USER';
const ALL_GOALS = 'All_GOALS';

export const updateCoins = (coin) => ({
  type: ALL_COINS,
  payload: coin,
});

export const updateUser = (user) => ({
  type: CURRENT_USER,
  payload: user,
});

export const updateGoals = (goal) => ({
  type: ALL_GOALS,
  payload: goal,
});
