import {
  FETCH_PRODUCT_FAILURE,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_SINGLE_REQUEST,
  FETCH_SINGLE_SUCCESS,
  FETCH_SINGLE_ERROR,
} from "../Constants/Product";

const productGlobalState = {
  products: [],
  singleProduct: {},
  isLoading: false,
  success: "",
  error: "",
};

 const productReducer = (state = productGlobalState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        success: "Products fetched successfully",
      };

    case FETCH_PRODUCT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case FETCH_SINGLE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SINGLE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        singleProduct: action.payload,
      };
    case FETCH_SINGLE_ERROR:
      return {
          ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default productReducer;