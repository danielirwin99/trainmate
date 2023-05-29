import React, { useContext, useReducer } from "react";
import reducer from "./reducer.js";
import {
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
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

  const register = () => {
    dispatch({ type: REGISTER_USER_BEGIN });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
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
