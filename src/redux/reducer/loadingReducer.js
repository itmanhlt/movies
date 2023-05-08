import { SET_LOADING_OFF, SET_LOADING_ON } from "../constant/userConstant";

const initialState = {
  isLoading: false,
};

let loadingReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING_ON: {
      return { ...state, isLoading: payload };
    }
    case SET_LOADING_OFF: {
      return { ...state, isLoading: payload };
    }
    default:
      return state;
  }
};
export default loadingReducer;
