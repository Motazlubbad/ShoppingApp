import {createSlice} from '@reduxjs/toolkit';
import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
const {
  actions: {addItemAction, deleteAll},
  reducer: cartReducer,
} = createSlice({
  name: 'cartReducer',
  initialState: [],
  reducers: {
    addItemAction: (state, action) => (state = [...state, action.payload]),
    deleteAll: state => (state = []),
  },
});

export const useCartReducer = () => {
  const dispatch = useDispatch();
  const itemList = useSelector(state => state.cartReducer);
  const addItem = useCallback(
    param => dispatch(addItemAction(param)),
    [dispatch],
  );
  const deleteAllItem = useCallback(() => dispatch(deleteAll()), [dispatch]);
  return {
    itemList,
    addItem,
    deleteAllItem,
  };
};

export default cartReducer;
