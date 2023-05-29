import React, { useContext, useReducer } from "react";
import reducer from "./reducer.js";
import {
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  DISPLAY_ALERT,
  CLEAR_ALERT,
} from "./actions.js";

const initialState = {
  isLoading: false,
  showAlert: false,
  showAlert: false,
  alertType: false,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 10000);
  };

  const registerUser = () => {
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
    } catch (error) {}
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearAlert,
        displayAlert,
        registerUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { useAppContext, AppProvider, initialState };
