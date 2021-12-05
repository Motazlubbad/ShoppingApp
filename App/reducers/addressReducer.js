import {createSlice} from '@reduxjs/toolkit';
import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
const {
  actions: {addItemAction},
  reducer: addressReducer,
} = createSlice({
  name: 'authReducer',
  initialState: [],
  reducers: {
    addItemAction: (state, action) => (state = [...state, action.payload]),
  },
});

export const useAddressReducer = () => {
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

export default addressReducer;
