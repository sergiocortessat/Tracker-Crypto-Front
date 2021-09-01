import { Provider } from 'react-redux';
import { createStore } from 'redux';
import renderer from 'react-test-renderer';
import Reducers from '../Redux/Reducers';
import AddMeasurement from '../components/AddMeasurement';

const store = createStore(Reducers);

it('renders correctly', () => {
  const addMeasurement = renderer
    .create(
      <Provider store={store}>
        <AddMeasurement />
      </Provider>,
    )
    .toJSON();
  expect(addMeasurement).toMatchSnapshot();
});
