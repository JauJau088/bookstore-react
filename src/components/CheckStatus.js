import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const CheckStatus = () => {
  const dispatch = useDispatch();

  const handleCheckStatus = () => {
    dispatch(checkStatus());
  };

  return (
    <button
      type="button"
      onClick={handleCheckStatus}
    >
      Check status
    </button>
  );
};

export default CheckStatus;
