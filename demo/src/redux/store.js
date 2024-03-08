import {configureStore} from '@reduxjs/toolkit';
import getUsers from '../screens/Home/getUsers';
import getUserDetails from '../screens/Details/getUserDetails';

// Configuring store that contains all the associate reucers
const store = configureStore({
  reducer: {
    getUsers,
    getUserDetails,
  },
});

export default store;
