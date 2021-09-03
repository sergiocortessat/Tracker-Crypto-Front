/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import renderer from 'react-test-renderer';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import Reducers from '../Redux/Reducers';
import NavBar from '../components/navBar';
import Home from '../App';
import Loading from '../auth0/Loading';

const store = createStore(Reducers);
it('renders Navbar', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    </Provider>,
  );
  const Loading = screen.getByRole('navigation');
  expect(Loading).toBeInTheDocument();
});

it('renders correctly', () => {
  const home = renderer
    .create(
      <Provider store={store}>
        <Home />
      </Provider>,
    )
    .toJSON();
  expect(home).toMatchSnapshot();
});
