import { LOGIN, SIGNUP, ERROR } from "../actions/types"

const initialState = {
  loginData: {}
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {

    case LOGIN:
      console.log(action)
      return {
        ...state,
        loginData: action.payload
      };

    case SIGNUP:
      return {
        ...state,
        signupData: action.payload
      };

      case ERROR:
      return{
        ...state,
        error: action.payload
      }

    default:
      return state;
  }
}

export default loginReducer;