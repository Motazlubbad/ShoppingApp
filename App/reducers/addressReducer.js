import {createSlice} from '@reduxjs/toolkit';
import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
const {
  actions: {addItemAction},
  reducer: addressReducer,
} = createSlice({
  name: 'addressReducer',
  initialState: [],
  reducers: {
    addItemAction: (state, action) => (state = [...state, action.payload]),
  },
});

export const useAddressReducer = () => {
  const dispatch = useDispatch();
  const itemList = useSelector(state => state.addressReducer);
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
