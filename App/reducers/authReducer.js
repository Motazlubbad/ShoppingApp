import {createSlice} from '@reduxjs/toolkit';
import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
const {
  actions: {login, logout},
  reducer: authReducer,
} = createSlice({
  name: 'authReducer',
  initialState: null,
  reducers: {
    login: (state, action) => (state = action.payload),
    logout: state => (state = null),
  },
});

export const useAuthReducer = () => {
  const dispatch = useDispatch();
  const loginStatus = useSelector(state => (state.authReducer ? true : false));
  const userData = useSelector(state => state.authReducer);
  const setLogin = useCallback(param => dispatch(login(param)), [dispatch]);
  const doLogout = useCallback(() => dispatch(logout()), [dispatch]);
  return {
    userData,
    loginStatus,
    setLogin,
    doLogout,
  };
};

export default authReducer;
