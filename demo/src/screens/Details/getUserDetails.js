import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {apiRoutes} from '../../constants/apiRoutes';

// Initail State for data
const initialState = {
  data: null,
  isLoading: null,
  error: null,
};

// Creating user details slice for loading, success and failed states
export const getUserDetailsSlice = createSlice({
  name: 'get-users-details',
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

export const {loading, success, failed} = getUserDetailsSlice.actions;

// Getting user details from API
export const getUserDetails = userId => async dispatch => {
  dispatch(loading());
  try {
    const response = await axios.get(apiRoutes.getUserDetails + userId);
    dispatch(success(response.data));
  } catch (error) {
    dispatch(failed(error.message));
  }
};

export default getUserDetailsSlice.reducer;
