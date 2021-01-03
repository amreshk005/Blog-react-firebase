import { FETCH_BLOG_REQUEST, FETCH_BLOG_SUCCESS, FETCH_BLOG_FAILURE } from "./actionTypes";

const initStore = {
  isLoading: false,
  data: [],
  error: "",
};

const blog = (state = initStore, action) => {
  switch (action.type) {
    case FETCH_BLOG_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_BLOG_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.data,
      };
    case FETCH_BLOG_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default blog;
