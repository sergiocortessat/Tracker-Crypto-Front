import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import '../Style/Loading.scss';

const Loading = () => (
  <div className="loading">
    <p>
      LOADING
    </p>
    <Loader
      type="Circles"
      color="#addc91"
      secondaryColor="#000"
      height={100}
      width={100}
    />
    <p>
      PLEASE WAIT
    </p>
  </div>
);

export default Loading;
