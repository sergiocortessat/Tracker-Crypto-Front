/* eslint-disable import/prefer-default-export */
const ALL_COINS = 'ALL_COINS';
const CURRENT_USER = 'CURRENT_USER';

export const updateCoins = (coin) => ({
  type: ALL_COINS,
  payload: coin,
});

export const updateUser = (user) => ({
  type: CURRENT_USER,
  payload: user,
});
