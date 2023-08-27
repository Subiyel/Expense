import { combineReducers } from 'redux';
import * as types from "../actions/types";

const INITIAL_STATE = {
  isLoggedIn: false,
  name: "",
  email: "",
  id: "",
  jwtToken: "",
  refreshToken: "",
  isArabic: false
};

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {


    case types.LOGIN: {
    return {
        ...state,
        isLoggedIn: true,
        id: action.data.id,
        name: action.data.name,
        email: action.data.email,
        jwtToken: action.data.token,
        refreshToken: action.data.refreshToken
        };
    }


    case types.SET_ARABIC: {
      return {
          ...state,
          isArabic: action.data
          };
      }

        

    default:
      return state
  }
};

export default combineReducers({ appReducer })