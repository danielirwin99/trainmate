import React, { useContext, useEffect, useReducer } from "react";
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
  GET_CURRENT_USER_BEGIN,
  GET_CURRENT_USER_SUCCESS,
  DELETE_USER_BEGIN,
  DELETE_USER_ERROR,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  CLEAR_VALUES,
} from "./actions.js";
import axios from "axios";

const initialState = {
  userLoading: true,
  isLoading: false,
  showAlert: false,
  alertType: false,
  user: null,
  weight: "",
  height: "",
  userName: "",
  userWeight: "",
  userHeight: "",
  userLastName: "Last Name",
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
        logoutUser();
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

  const updateUser = async (currentUser) => {
    dispatch({ type: UPDATE_USER_BEGIN });
    try {
      const { data } = await authFetch.patch("/auth/updateUser", currentUser);
      const { user, weight, height } = data;

      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: { user, weight, height },
      });
    } catch (error) {
      dispatch({
        type: UPDATE_USER_ERROR,
        payload: { msg: error.response.data },
      });
    }
    clearAlert();
  };

  const logoutUser = async () => {
    dispatch({ type: LOGOUT_USER });
    await authFetch.get("/auth/logout");
  };

  const getCurrentUser = async () => {
    dispatch({ type: GET_CURRENT_USER_BEGIN });
    try {
      const { data } = await authFetch.get("/auth/getCurrentUser");

      const { user, weight, height } = data;
      dispatch({
        type: GET_CURRENT_USER_SUCCESS,
        payload: { user, weight, height },
      });
    } catch (error) {
      if (error.response.status === 401) return;
      logoutUser();
    }
  };

  const deleteUser = async (userId) => {
    dispatch({ type: DELETE_USER_BEGIN });
    try {
      await authFetch.delete(`/auth/${userId}`);
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: DELETE_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const clearValues = () => {
    dispatch({ type: CLEAR_VALUES });
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearAlert,
        displayAlert,
        registerUser,
        loginUser,
        updateUser,
        logoutUser,
        getCurrentUser,
        deleteUser,
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
