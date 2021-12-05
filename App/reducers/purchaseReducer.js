import {createSlice} from '@reduxjs/toolkit';
import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
const {
  actions: {addItemAction},
  reducer: purchaseReducer,
} = createSlice({
  name: 'purchaseReducer',
  initialState: [],
  reducers: {
    addItemAction: (state, action) => (state = [...state, action.payload]),
  },
});

export const usePurchaseReducer = () => {
  const dispatch = useDispatch();
  const purchaseList = useSelector(state => state.purchaseReducer);
  const addPurchase = useCallback(
    param => dispatch(addItemAction(param)),
    [dispatch],
  );
  return {
    purchaseList,
    addPurchase,
  };
};

export default purchaseReducer;
