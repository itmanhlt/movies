import { combineReducers } from "redux";
import userReducer from "./userReducer";
import movieReducer from "./movieReducer";
import loadingReducer from "./loadingReducer";
import trailerReducer from "./trailerReducer";
const rootReducer = combineReducers({
  userReducer,
  movieReducer,
  loadingReducer,
  trailerReducer,
});
export default rootReducer;
