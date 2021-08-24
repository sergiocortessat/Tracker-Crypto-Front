const userEndpoint = 'http://localhost:3000/users';
const measurementEndpoint = 'http://localhost:3000/measurements';
const goalEndpoint = 'http://localhost:3000/goals';
const coinEndpoint = 'http://localhost:3000/coins';



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