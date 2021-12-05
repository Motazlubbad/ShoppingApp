import {createSlice} from '@reduxjs/toolkit';
import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import StoreData from '../utils/StoreData';
const {
  actions: {addItemAction, setStoredList},
  reducer: addressReducer,
} = createSlice({
  name: 'addressReducer',
  initialState: [],
  reducers: {
    setStoredList: (state, action) => (state = action.payload),
    addItemAction: (state, action) => {
      StoreData.storeData(
        StoreData.ADDRESS_KEY,
        JSON.stringify([...state, action.payload]),
      );
      return (state = [...state, action.payload]);
    },
  },
});

export const useAddressReducer = () => {
  const dispatch = useDispatch();
  const itemList = useSelector(state => state.addressReducer);
  const setAddressList = useCallback(
    param => dispatch(setStoredList(param)),
    [dispatch],
  );

  const addItem = useCallback(
    param => dispatch(addItemAction(param)),
    [dispatch],
  );
  return {
    itemList,
    addItem,
    setAddressList,
  };
};

export default addressReducer;
