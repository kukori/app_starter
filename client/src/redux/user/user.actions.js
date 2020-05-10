import axios from 'axios';
import { UserActionTypes } from './user.types';
import { saveMessage } from '../message/message.actions';
import setDefaults from '../../utils/setDefaults';

// Check token & load user
export const loadUser = () => async dispatch => {
  try {
    if(!localStorage.token) {
      return;
    }

    dispatch(setLoading());
    setDefaults(localStorage.token);
    const response = await axios.get('/api/v1/auth/current');

    dispatch({
        type: UserActionTypes.USER_LOADED,
        payload: response.data
    });
  } catch (error) {
      dispatch(saveMessage(error.message));
      dispatch({
          type: UserActionTypes.LOGIN_FAIL
      });
  }
};

// Login User
export const login = (email, password) => async dispatch => {
  try {
    dispatch(setLoading());
    setDefaults();

    const response = await axios.post('/api/v1/auth/login', {"email": email, "password": password});

    if(!response.data.success && response.data.error) {
      throw new Error(response.data.error);
    }

    const payload = {
      "email": email,
      "token": 'Bearer ' + response.data.token
    };

    dispatch({
        type: UserActionTypes.LOGIN_SUCCESS,
        payload: payload
    });
  } catch (error) {
      console.log(error);
      dispatch(saveMessage(error.message));
      dispatch({
          type: UserActionTypes.LOGIN_FAIL
      });
  }
};

// Logout User
export const logout = () => async dispatch => {
  try {
    setDefaults(localStorage.token);
    const response = await axios.get('/api/v1/auth/logout');

    dispatch({
        type: UserActionTypes.LOGOUT_SUCCESS,
        payload: response.data
    });
  } catch (error) {
      dispatch(saveMessage(error.message));
      dispatch({
          type: UserActionTypes.LOGOUT_SUCCESS
      });
  }
};

// Set loading to true
export const setLoading = () => {
  return {
    type: UserActionTypes.USER_LOADING
  };
};