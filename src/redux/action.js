import axios from "axios";
import { FETCH_BLOG_REQUEST, FETCH_BLOG_SUCCESS, FETCH_BLOG_FAILURE } from "./actionTypes";

const fetchGetRequest = (query) => {
  return {
    type: FETCH_BLOG_REQUEST,
  };
};

const fetchGetSuccess = (data) => {
  return {
    type: FETCH_BLOG_SUCCESS,
    data: data,
  };
};

const fetchGetFailure = (error) => {
  return {
    type: FETCH_BLOG_FAILURE,
    error: error,
  };
};

const fetchData = () => {
  //   let url = `http://127.0.0.1:8000/search?q="superman"&page=1`;
  let url = `https://blog-2051e-default-rtdb.firebaseio.com/Blog.json`;
  return async (dispatch) => {
    dispatch(fetchGetRequest());
    return await axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        return dispatch(fetchGetSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchGetFailure(err));
        console.log(err);
      });
  };
};

export { fetchData, fetchGetRequest, fetchGetSuccess, fetchGetFailure };
