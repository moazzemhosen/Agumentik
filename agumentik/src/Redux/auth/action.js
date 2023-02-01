import axios from "axios";
import * as types from "./action.types";

export const register = (payload) => (dispatch) => {
  return axios
    .post("http://localhost:8080/register", payload)
    .then((res) => {
      console.log(res.data);
      return { status: types.REGISTERSUCCESS };
    })
    .catch((er) => {
      console.log("register Error from FE", er.response.data);
      return {
        status: types.REGISTERREJECTED,
        message: er.response.data.message,
      };
    });
};

export const login = (payload) => (dispatch) => {
  dispatch({ type: types.LOGINREQUEST });
  return axios
    .post("http://localhost:8080/login",payload)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: types.LOGINSUCCESS, payload: res.data });
      return { status: types.LOGINSUCCESS,user:res.data.user };
    })
    .catch((er) => {
      console.log("login Error in FE", er);
      dispatch({ type: types.LOGINREJECTED });
      return { status: types.LOGINREJECTED };
    });
};

export const saveVisitor = (payload) => (dispatch) => {
  return axios
    .post("http://localhost:8080/visitor",payload)
    .then((res) => {
      console.log(res.data);
    })
    .catch((er) => {
      console.log("login Error in FE", er);
    });
};

export const getVisitor = (payload) => (dispatch) => {
  dispatch({ type: types.VISITORREQUEST });
  return axios
    .get("http://localhost:8080/visitor/All",payload)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: types.VISITORSUCCESS, payload: res.data });
      // return { status: types.VISITORSUCCESS,user:res.data.user };
    })
    .catch((er) => {
      console.log("login Error in FE", er);
      dispatch({ type: types.VISITORREJECTED});
      // return { status: types.LOGINREJECTED };
    });
};

export const allregister = (payload) => (dispatch) => {
  dispatch({ type: types.ALLREGISTERREQUEST});
  return axios
    .get("http://localhost:8080/register/all", payload)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: types.ALLREGISTERSUCCESS,payload:res.data.users});
    })
    .catch((er) => {
      console.log("register Error from FE", er.response.data);
      dispatch({type: types.REGISTERREJECTED});
    });
};
