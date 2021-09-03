// const userEndpoint = 'http://localhost:3000/users';
// const measurementEndpoint = 'http://localhost:3000/measurements';
// const goalEndpoint = 'http://localhost:3000/goals';
// const coinEndpoint = 'http://localhost:3000/coins';
// const showUserEndpoint = 'http://localhost:3000/users';

const userEndpoint = 'https://scs-tracker-api.herokuapp.com/users';
const measurementEndpoint = 'https://scs-tracker-api.herokuapp.com/measurements';
const goalEndpoint = 'https://scs-tracker-api.herokuapp.com/goals';
const coinEndpoint = 'https://scs-tracker-api.herokuapp.com/coins';
const showUserEndpoint = 'https://scs-tracker-api.herokuapp.com/users';
// // Get requests

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

export const getGoal = async (sub) => {
  const response = await fetch(`${goalEndpoint}/${sub}`);
  const user = await response.json();
  return user;
};

export const getCoins = async () => {
  const response = await fetch(coinEndpoint);
  const user = await response.json();
  return user;
};

export const getUsers = async () => {
  const response = await fetch(userEndpoint);
  const user = await response.json();
  return user;
};

export const getUser = async (id) => {
  const response = await fetch(`${showUserEndpoint}/${id}`);
  const user = await response.json();
  return user;
};

// Post requests

export const postUser = async (data, accessToken) => {
  try {
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
  } catch (error) {
    return error;
  }
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

// Patch

export const editGoals = async (data, accessToken, coinId) => {
  const response = await fetch(`${goalEndpoint}/${coinId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(data),
  });
  const user = await response.json();
  return user;
};

// DELETE

export const deleteMeasurement = async (id, accessToken) => {
  fetch(`${measurementEndpoint}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${accessToken}`,
    },
  });
};
