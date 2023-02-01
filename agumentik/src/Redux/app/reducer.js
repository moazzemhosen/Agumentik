import * as types from "./action.types";

const initState = {
  isLoading: false,
  isError: false,
  imgData: [],
  socialIcon: [],
 
};

export const appReducer = (state = initState, { type, payload }) => {
  switch (type) {
    // GET Todo
    case types.GETDATAREQUEST:
      return { ...state, isLoading: true, isError: false };

    case types.GETDATASUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        imgData: payload,
      };

    case types.GETDATAREJECTED:
      return { ...state, isLoading: false, isError: true };

    // for socialicon data
    case types.GETiDATAREQUEST:
      return { ...state, isLoading: true, isError: false };

    case types.GETiDATASUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        socialIcon: payload,
      };

    case types.GETiDATAREJECTED:
      return { ...state, isLoading: false, isError: true };

    // IMGUpdated Data
    case types.UPDATEDATA_REQUEST:
      return { ...state, isLoading: true, isError: false };

    case types.UPDATEDATA_SUCCESS:
      // imgData= [{}._id] - updatedData=[ {}._id /payload,{}]
      let updatedData=state.imgData.map((e)=>e._id === payload._id ? payload:e)
      return {
        ...state,
        isLoading: false,
        isError: false,
        imgData:updatedData
       
      };

    case types.UPDATEDATA_REJECTED:
      return { ...state, isLoading: false, isError: true };

//SOCIAL UPDATE DATA
case types.SOCIALUPDATEDATA_REQUEST:
  return { ...state, isLoading: true, isError: false };

case types.SOCIALUPDATEDATA_SUCCESS:
  let socialupdatedData=state.socialIcon.map((e)=>e._id === payload._id ? payload:e)
  return {
    ...state,
    isLoading: false,
    isError: false,
    socialIcon:socialupdatedData
   
  };

case types.SOCIALUPDATEDATA_REJECTED:








    //Post data
    case types.POSTDATA_REQUEST:
      return { ...state, isLoading: true, isError: false };

    case types.POSTDATA_SUCCESS:
      
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case types.POSTDATA_REJECTED:
      return { ...state, isLoading: false, isError: true };

    // Delete Data
    case types.DELETEDATA_REQUEST:
      return { ...state, isLoading: true, isError: false };

    case types.DELETEDATA_SUCCESS:
    
    
     
      return {
        ...state,
        isLoading: false,
        isError: false,
       
      };
    case types.DELETEDATA_REJECTED:
      return { ...state, isLoading: false, isError: true };

    default:
      return state;
  }
};
