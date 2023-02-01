import { loadData, saveData, removeData } from "../../utils/localstorage";
import * as types from "./action.types";
const initState = {
  isLoading: false,
  isError: false,
  isAuth: !!loadData("token") || false,
  token: loadData("token") || "",
  user: loadData("user") || {},
  allUser: [],
  visitor:[]
};

export const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case types.LOGINREQUEST:
      return { ...state, isLoading: true, isError: false };

    case types.LOGINSUCCESS:
      saveData("token", payload.token);
      saveData("user", payload.user);
      return {
        ...state,
        isLoading: false,
        isError: false,
        isAuth: true,
        token: payload.token,
        user: payload.user,
        visitor:[],
        allregister:[]
      };
    case types.LOGINREJECTED:
      return { ...state, isLoading: false, isError: true };

      
    case types.REGISTERREQUEST:
      return { ...state, isLoading: true, isError: false };

    case types.REGISTERSUCCESS:
      return {
        ...state,
        alluser: payload,
      };
    case types.REGISTERREJECTED:
      return { ...state, isLoading: false, isError: true };



// visitor part
      case types.LOGINREJECTED:
      return { ...state, isLoading: false, isError: true };

    case types.VISITORREQUEST:
      return { ...state, isLoading: true, isError: false };

    case types.VISITORSUCCESS:
      return {
        ...state,
        visitor: payload,
      };
    case types.VISITORREJECTED:
      return { ...state, isLoading: false, isError: true };


      // all register user
  
      case types.ALLREGISTERREQUEST:
        return { ...state, isLoading: true, isError: false };
  
      case types.ALLREGISTERSUCCESS:
        return {
          ...state,
          allregister: payload,
        };
      case types.ALLREGISTERREJECTED:
        return { ...state, isLoading: false, isError: true };


      // logoutpart
    case types.LOGOUT:
      removeData("token");
      removeData("user");
      return { ...state, isAuth: false, token: "", user: {} };
    default:
      return state;
  }
};
// api returns :- {token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvYmoiOnsiX…4MjN9._NWHMgYdu1RXzMI3KnGdyh_vcoPx4CXIs6DODiNs9-8', user: {…}, message: 'Login successfully'}
