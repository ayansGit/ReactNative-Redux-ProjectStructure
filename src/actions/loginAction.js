import { LOGIN, ERROR } from "./types"
import userApi from "../api/user"
import { onSuccess, onFailure, loading } from "./getResponseAction"

export const loginAction = formdata => {

    return async (dispatch) =>{

      dispatch(loading(true));
      let response = await userApi.login(formdata);
      dispatch(loading(false));
      if(response.status ==200){
        dispatch(onSuccess(response, LOGIN))
      }else{
        dispatch(onFailure(response, ERROR))
      }
      
    }
  }


