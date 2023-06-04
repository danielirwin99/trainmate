import {
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  DISPLAY_ALERT,
  CLEAR_ALERT,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  GET_CURRENT_USER_BEGIN,
  GET_CURRENT_USER_SUCCESS,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  LOGOUT_USER,
  CLEAR_VALUES,
} from "./actions.js";

import { initialState } from "./appContext.js";

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: "Please provide all values",
    };
  }

  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: "",
      alertText: "",
    };
  }

  if (action.type === REGISTER_USER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === REGISTER_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      user: action.payload.user,
      weight: action.payload.weight,
      height: action.payload.height,
      showAlert: true,
      alertType: "success",
      alertText: "User Successfully Created",
    };
  }

  if (action.type === REGISTER_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }

  if (action.type === LOGIN_USER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === LOGIN_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      user: action.payload.user,
      weight: action.payload.weight,
      height: action.payload.height,
      showAlert: true,
      alertType: "success",
      alertText: "User Successfully Logged In",
    };
  }

  if (action.type === LOGIN_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }

  // If we click the logout button
  if (action.type === LOGOUT_USER) {
    return {
      // The default values from appContext.js INSTEAD of ...state
      ...initialState,
      userLoading: false,
    };
  }

  if (action.type === GET_CURRENT_USER_BEGIN) {
    return {
      ...state,
      userLoading: true,
      showAlert: false,
    };
  }

  if (action.type === GET_CURRENT_USER_SUCCESS) {
    return {
      ...state,
      userLoading: false,
      user: action.payload.user,
      userWeight: action.payload.weight,
      userHeight: action.payload.height,
    };
  }

  if (action.type === UPDATE_USER_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === UPDATE_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      user: action.payload.user,
      userName: action.payload.userName,
      useLastName: action.payload.userLastName,
      userWeight: action.payload.userWeight,
      userHeight: action.payload.userHeight,
      showAlert: true,
      alertType: "success",
      alertText: "Update Profile Updated!",
    };
  }

  if (action.type === UPDATE_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }

  if (action.type === CLEAR_VALUES) {
    const initialState = {
      isEditing: false,
      weight: state.weight,
      height: state.height,
      email: state.email,
      name: state.name,
      lastName: state.lastName,
    };
    return { ...state, ...initialState };
  }

  // throw new Error(`No such action : ${action.type}`);
};

export default reducer;
