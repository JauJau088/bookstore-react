import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';
import './CheckStatus.css';

const CheckStatus = () => {
  const dispatch = useDispatch();

  const handleCheckStatus = () => {
    dispatch(checkStatus());
  };

  return (
    <button
      className="CheckStatus-Button"
      type="button"
      onClick={handleCheckStatus}
    >
      CHECK STATUS
    </button>
  );
};

export default CheckStatus;
