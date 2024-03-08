import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {apiRoutes} from '../../constants/apiRoutes';

// Initail State for data
const initialState = {
  data: null,
  isLoading: null,
  error: null,
};

// Creating users slice for loading, success and failed states
export const getUsersSlice = createSlice({
  name: 'get-users',
  initialState,
  reducers: {
    loading: state => {
      (state.isLoading = true), (state.error = null);
    },

    success: (state, action) => {
      (state.data = action.payload), (state.isLoading = false);
    },

    failed: (state, action) => {
      (state.error = action.payload), (state.isLoading = false);
    },
  },
});

export const {loading, success, failed} = getUsersSlice.actions;

// Getting user list from API
export const getUsers = () => async dispatch => {
  dispatch(loading());
  try {
    const response = await axios.get(apiRoutes.getUsers);
    dispatch(success(response.data));
  } catch (error) {
    dispatch(failed(error.message));
  }
};

export default getUsersSlice.reducer;
