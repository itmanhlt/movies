import { SET_MOVIE_ARR } from "../constant/userConstant";

const initialState = {
  movieArr: [],
};

let movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_MOVIE_ARR: {
      return { ...state, movieArr: payload };
    }
    default:
      return state;
  }
};
export default movieReducer;
