import React, { useContext, useReducer } from "react";
import reducer from "./reducer.js";
import {
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  DISPLAY_ALERT,
  CLEAR_ALERT,
  LOGIN_USER_BEGIN,
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
} from "./actions.js";
import axios from "axios";

const initialState = {
  isLoading: false,
  showAlert: false,
  alertType: false,
  user: null,
  weight: "80kg",
  height: "178cm",
  gender: "male",
  genderTypeOptions: ["male", "female", "other"],
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // Axios Setup
  const authFetch = axios.create({
    baseURL: "/api/v1",
  });

  // Response Axios
  authFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      console.log(error.response);
      if (error.response.status === 401) {
        console.log("AUTH ERROR");
        // logoutUser();
      }
      return Promise.reject(error);
    }
  );

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

  const registerUser = async (currentUser) => {
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
      const { data } = await axios.post("/api/v1/auth/register", currentUser);
      console.log(data);
      const { user, weight, height } = data;
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: {
          user,
          weight,
          height,
        },
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const loginUser = async (currentUser) => {
    dispatch({ type: LOGIN_USER_BEGIN });
    try {
      const { data } = await axios.post("/api/v1/auth/login", currentUser);
      console.log(data);
      const { user, weight, height } = data;
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: {
          user,
          weight,
          height,
        },
      });
    } catch (error) {
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    // Clear the alert after three seconds (see above)
    clearAlert();
  };

  const logoutUser = async () => {
    dispatch({ type: LOGOUT_USER });
    await authFetch.get("/auth/logout");
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearAlert,
        displayAlert,
        registerUser,
        loginUser,
        logoutUser,
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
