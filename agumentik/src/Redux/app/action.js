import axios from "axios";
import * as types from "./action.types";

export const getData = (props) => (dispatch) => {
  dispatch({ type: types.GETDATAREQUEST });
  axios
    .get(`http://localhost:8080/`)
    .then((res) => {
      dispatch({ type: types.GETDATASUCCESS, payload: res.data });
      // console.log(res.data);
    })
    .catch((er) => {
      dispatch({ type: types.GETDATAREJECTED });
      console.log("error from get data action ", er);
    });
};





export const geticonData = (props) => (dispatch) => {
  dispatch({ type: types.GETiDATAREQUEST });
  axios
    .get(`http://localhost:8080/icon/all`)
    .then((res) => {
      dispatch({ type: types.GETiDATASUCCESS, payload: res.data });
      // console.log(res.data);
    })
    .catch((er) => {
      dispatch({ type: types.GETiDATAREJECTED });
      console.log("error from get data action ", er);
    });
};





export const postData = (payload) => (dispatch) => {
  dispatch({ type: types.POSTDATA_REQUEST });
  return axios
    .post("/todo/post", payload)
    .then((res) => {
      //console.log(res.data);
      dispatch({ type: types.POSTDATA_SUCCESS, payload: res.data});
      return { status: types.POSTDATA_SUCCESS };
    })
    .catch((err) => {
      dispatch({ type: types.POSTDATA_REJECTED });
      console.log("error from post data action ", err);
      return { status: types.POSTDATA_REJECTED };
    });
};


export const updateData = (payload) => (dispatch) => {
  dispatch({ type: types.UPDATEDATA_REQUEST });
  return axios
    .patch(`http://localhost:8080/${payload._id}`,payload)
    .then((res) => {
      //console.log("res",res.data);
      dispatch({type:types.UPDATEDATA_SUCCESS,payload:res.data})
      
    })
    .catch((err) => {
      console.log("error from patch data action ", err);
      dispatch({type:types.UPDATEDATA_REJECTED})
      return { status: types.UPDATEDATA_REJECTED }
    });
};

//social media link update
export const iconupdateData = (payload) => (dispatch) => {
  dispatch({ type: types.SOCIALUPDATEDATA_REQUEST });
  return axios
    .patch(`http://localhost:8080/icon/${payload._id}`,payload)
    .then((res) => {
      console.log("res1",res.data);
      dispatch({type:types.SOCIALUPDATEDATA_SUCCESS,payload:res.data})
    })
    .catch((err) => {
      console.log("error from patch data action ", err);
      dispatch({type:types.UPDATEDATA_REJECTED})
    });
};



export const deleteData = (payload) => (dispatch) => {
  dispatch({ type: types.DELETEDATA_REQUEST });
  return axios
    .delete(`todo/${payload._id}`)
    .then((res) => {
      console.log("deleted data",res.data);
      dispatch({type:types.DELETEDATA_SUCCESS,payload:res.data})
      return { status: types.DELETEDATA_SUCCESS }
    })
    .catch((err) => {
      console.log("error from delete data action ", err);
      dispatch({type:types.DELETEDATA_REJECTED});
      return { status: types.DELETEDATA_REJECTED }
    });
};
