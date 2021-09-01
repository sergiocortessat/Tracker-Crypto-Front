import { Provider } from 'react-redux';
import { createStore } from 'redux';
import renderer from 'react-test-renderer';
import {
  BrowserRouter,
} from 'react-router-dom';
import Reducers from '../Redux/Reducers';
import Footer from '../components/Footer';

const store = createStore(Reducers);

it('renders correctly', () => {
  const addMeasurement = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <Footer />
        </BrowserRouter>
      </Provider>,
    )
    .toJSON();
  expect(addMeasurement).toMatchSnapshot();
});
