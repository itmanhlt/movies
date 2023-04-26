import { SHOW_TRAILER } from "../constant/userConstant";

const initialState = {
  status: "hidden",
  url: "",
};
let trailerReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case SHOW_TRAILER: {
      let cloneVideo = { ...state };
      cloneVideo.status = payload.status;
      cloneVideo.url = payload.url;
      return { ...state, status: cloneVideo.status, url: cloneVideo.url };
    }
    default:
      return state;
  }
};
export default trailerReducer;
