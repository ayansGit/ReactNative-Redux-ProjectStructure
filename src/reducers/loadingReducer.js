import { LOADING } from "../actions/types"

const initialState = {
  isLoading: false
};

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {

    case LOADING:
      console.log(action)
      return {
        ...state,
        isLoading: action.loading
      };

    default:
      return state;
  }
}

export default loadingReducer;