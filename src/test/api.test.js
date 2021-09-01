/* eslint-disable no-unused-vars */
// test api calls with a valid token and a valid user id
import {
  getMeasurements,
  getGoals,
  getGoal,
  getCoins,
  getUsers,
  getUser,
  postUser,
  postGoals,
  postMeasurements,
  editGoals,
  deleteMeasurement,
} from '../API/API';

const userEndpoint = 'https://scs-tracker-api.herokuapp.com/users';
const measurementEndpoint = 'https://scs-tracker-api.herokuapp.com/measurements';
const goalEndpoint = 'https://scs-tracker-api.herokuapp.com/goals';
const coinEndpoint = 'https://scs-tracker-api.herokuapp.com/coins';
const showUserEndpoint = 'https://scs-tracker-api.herokuapp.com/users';

describe('API', () => {
  it('postUser should call fetch with the correct params', () => {
    const mockFetch = jest.fn();
    global.fetch = mockFetch;
    const user = {
      sub: 'API-testing',
      name: 'tester-one',
      email: 'tester@testing.com',
    };
    postUser(user, '12345');
    expect(mockFetch).toHaveBeenCalledWith(
      userEndpoint,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: 'Bearer 12345',
        },
        body: JSON.stringify(user),
      },
    );
  });
  it('getUsers should call fetch with the correct params', () => {
    const mockFetch = jest.fn();
    global.fetch = mockFetch;
    getUsers();
    expect(mockFetch).toHaveBeenCalledWith(
      userEndpoint,
    );
  });

  it('postMeasurements should call fetch with the correct params', () => {
    const mockFetch = jest.fn();
    global.fetch = mockFetch;
    const measurement = {
      user_id: 1,
      goal_id: 1,
      coin_id: 1,
    };

    postMeasurements(measurement, '12345');
    expect(mockFetch).toHaveBeenCalledWith(
      measurementEndpoint,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: 'Bearer 12345',
        },
        body: JSON.stringify(measurement),
      },
    );
  });

  it('getMeasurements should call fetch with the correct params', () => {
    const mockFetch = jest.fn();
    global.fetch = mockFetch;
    getMeasurements();
    expect(mockFetch).toHaveBeenCalledWith(
      measurementEndpoint,
    );
  });
  it('getGoals should call fetch with the correct params', () => {
    const mockFetch = jest.fn();
    global.fetch = mockFetch;
    getGoals();
    expect(mockFetch).toHaveBeenCalledWith(
      goalEndpoint,
    );
  });
  it('getCoins should call fetch with the correct params', () => {
    const mockFetch = jest.fn();
    global.fetch = mockFetch;
    getCoins();
    expect(mockFetch).toHaveBeenCalledWith(
      coinEndpoint,
    );
  });
  it('getUser should call fetch with the correct params', () => {
    const mockFetch = jest.fn();
    global.fetch = mockFetch;
    getUser(1);
    expect(mockFetch).toHaveBeenCalledWith(
      `${showUserEndpoint}/1`,
    );
  });
  it('getGoal should call fetch with the correct params', () => {
    const mockFetch = jest.fn();
    global.fetch = mockFetch;
    getGoal(1);
    expect(mockFetch).toHaveBeenCalledWith(
      `${goalEndpoint}/1`,
    );
  });
  it('postGoal should call fetch with the correct params', () => {
    const mockFetch = jest.fn();
    global.fetch = mockFetch;
    const goal = {
      sub: 'API-testing',
      goal: 1,
      coin_id: 1,
    };

    postGoals(goal, '12345');
    expect(mockFetch).toHaveBeenCalledWith(
      goalEndpoint,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: 'Bearer 12345',
        },
        body: JSON.stringify(goal),
      },
    );
  });

  it('postGoal should call fetch with the correct params', () => {
    const mockFetch = jest.fn();
    global.fetch = mockFetch;
    const goal = {
      sub: 'API-testing',
      goal: 1,
      coin_id: 1,
    };

    postGoals(goal, '12345');
    expect(mockFetch).toHaveBeenCalledWith(
      goalEndpoint,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: 'Bearer 12345',
        },
        body: JSON.stringify(goal),
      },
    );
  });

  it('editGoal should call fetch with the correct params', () => {
    const mockFetch = jest.fn();
    global.fetch = mockFetch;
    const goal = {
      sub: 'API-testing',
      goal: 1,
      coin_id: 1,
    };

    editGoals(goal, '12345', 1);
    expect(mockFetch).toHaveBeenCalledWith(
      `${goalEndpoint}/1`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          authorization: 'Bearer 12345',
        },
        body: JSON.stringify(goal),
      },
    );
  });

  it('deleteMeasurement should call fetch with the correct params', () => {
    const mockFetch = jest.fn();
    global.fetch = mockFetch;
    deleteMeasurement(1, '12345');
    expect(mockFetch).toHaveBeenCalledWith(
      `${measurementEndpoint}/1`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          authorization: 'Bearer 12345',
        },
      },
    );
  });
});
