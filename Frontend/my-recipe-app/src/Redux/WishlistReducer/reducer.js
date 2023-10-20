import {
    WISHLIST_REQUEST_SUCCESS,
    GET_WISHLIST_REQUEST_SUCCESS,
    WISHLIST_REQUEST_FAILURE,
    REMOVE_WISHLIST_REQUEST_SUCCESS
  } from "./actionTypes";
  
  const initialstate = {
    isLoading: false,
    isError: false,
    wishlist: [],
  };
  
  export const reducer = (state = initialstate, { type, payload }) => {
    switch (type) {
      case WISHLIST_REQUEST_SUCCESS:
        return { ...state, isLoading: false};
      case GET_WISHLIST_REQUEST_SUCCESS:
        return { ...state, isLoading: false, wishlist: payload };
        case REMOVE_WISHLIST_REQUEST_SUCCESS: 
        return { ...state,isLoading:false};
        case WISHLIST_REQUEST_FAILURE:
      return { ...state, isLoading: false, isError: true }
      
      default:
        return state;
    }
  };