import axios from "axios";
import {
  FETCH_PRODUCT_FAILURE,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_SINGLE_SUCCESS,
  FETCH_SINGLE_REQUEST,
  FETCH_SINGLE_ERROR,
} from "../Constants/Product";

const fetchProductMethod = () => async (dispatch) => {
  dispatch({ type: FETCH_PRODUCT_REQUEST });
  try {
    const response = await axios.get("https://dummyjson.com/products/");
    console.log(`respone is true,${response.data}`);
    if (response.data.products.length > 0) {
      dispatch({
        type: FETCH_PRODUCT_SUCCESS,
        payload: response.data.products,
      });
    } else {
      dispatch({
        type: FETCH_PRODUCT_FAILURE,
        payload: "Products not fetched",
      });
    }
  } catch (error) {
    dispatch({ type: FETCH_PRODUCT_FAILURE, payload: `error ${error.response.data}` });
  }
};

const featchsignleproduct = (productid) => async (dispatch) => {
  dispatch({ type: FETCH_SINGLE_REQUEST });
  try {
    const response = await axios.get(`https://dummyjson.com/products/${productid}`);
    console.log(response.data);
    if (response.data) {
      dispatch({
        type: FETCH_SINGLE_SUCCESS,
        payload: response.data,
      });
    } else {
      dispatch({ type: "failed tp fetch error" });
    }
  } catch (error) {
    dispatch({ type: FETCH_SINGLE_ERROR, payload: `error ${error.response.data}`});
  }
};

export { fetchProductMethod, featchsignleproduct };
