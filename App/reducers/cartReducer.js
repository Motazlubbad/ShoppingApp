import {createSlice} from '@reduxjs/toolkit';
import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import StoreData from '../utils/StoreData';
const {
  actions: {addItemAction, deleteAll, setStoredList},
  reducer: cartReducer,
} = createSlice({
  name: 'cartReducer',
  initialState: [],
  reducers: {
    setStoredList: (state, action) => (state = action.payload),
    addItemAction: (state, action) => {
      StoreData.storeData(
        StoreData.CART_KEY,
        JSON.stringify([...state, action.payload]),
      );
      return (state = [...state, action.payload]);
    },
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
  const setCartList = useCallback(
    param => dispatch(setStoredList(param)),
    [dispatch],
  );
  const deleteAllItem = useCallback(() => dispatch(deleteAll()), [dispatch]);
  return {
    itemList,
    addItem,
    deleteAllItem,
    setCartList,
  };
};

export default cartReducer;
