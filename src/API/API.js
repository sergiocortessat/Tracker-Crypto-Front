const userEndpoint = 'http://localhost:3000/users';
const measurementEndpoint = 'http://localhost:3000/measurements';
const goalEndpoint = 'http://localhost:3000/goals';
const coinEndpoint = 'http://localhost:3000/coins';

// Get requests

export const getMeasurements = async () => {
  const response = await fetch(measurementEndpoint);
  const user = await response.json();
  return user;
};

export const getGoals = async () => {
  const response = await fetch(goalEndpoint);
  const user = await response.json();
  return user;
};

export const getCoins = async () => {
  const response = await fetch(coinEndpoint);
  const user = await response.json();
  return user;
};

// Post requests

export const postUser = async (data, accessToken) => {
  const response = await fetch(userEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(data),
  });
  const user = await response.json();
  return user;
};

export const postGoals = async (data, accessToken) => {
  const response = await fetch(goalEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(data),
  });
  const goals = await response.json();
  return goals;
};

export const postMeasurements = async (data, accessToken) => {
  const response = await fetch(measurementEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(data),
  });
  const goals = await response.json();
  return goals;
};

export const editGoals = async (data, accessToken) => {
  const response = await fetch(goalEndpoint, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(data),
  });
  const user = await response.json();
  return user;
};
