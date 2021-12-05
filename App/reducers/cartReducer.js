import {createSlice} from '@reduxjs/toolkit';
import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
const {
  actions: {addItemAction},
  reducer: cartReducer,
} = createSlice({
  name: 'cartReducer',
  initialState: [],
  reducers: {
    addItemAction: (state, action) => (state = [...state, action.payload]),
  },
});

export const useCartReducer = () => {
  const dispatch = useDispatch();
  const itemList = useSelector(state => state.cartReducer);

  const addItem = useCallback(
    param => dispatch(addItemAction(param)),
    [dispatch],
  );
  return {
    itemList,
    addItem,
  };
};

export default cartReducer;
