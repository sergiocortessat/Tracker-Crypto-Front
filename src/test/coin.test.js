import { Provider } from 'react-redux';
import { createStore } from 'redux';
import renderer from 'react-test-renderer';
import Reducers from '../Redux/Reducers';
import Coin from '../components/Coin';

const store = createStore(Reducers);

it('renders correctly', () => {
  const addMeasurement = renderer
    .create(
      <Provider store={store}>
        <Coin />
      </Provider>,
    )
    .toJSON();
  expect(addMeasurement).toMatchSnapshot();
});
