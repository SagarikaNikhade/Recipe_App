import axios from "axios";
import {
  WISHLIST_REQUEST_FAILURE,
  GET_WISHLIST_REQUEST_SUCCESS,
  WISHLIST_REQUEST_SUCCESS,
  REMOVE_WISHLIST_REQUEST_SUCCESS
} from "./actionTypes";

// export const getWishlist = (dispatch) => {
//   dispatch({ type: WISHLIST_REQUEST_SUCCESS });
  
//   const token = localStorage.getItem("token");
//   const config = {
//     headers: {
//       "Authorization": `Bearer ${token}`
//     }
//   };

//   axios.get("https://recipe-application-json.onrender.com/wishlist/", config)
//     .then((res) => {
//       dispatch({ type: GET_WISHLIST_REQUEST_SUCCESS, payload: res.data });
//     })
//     .catch((err) => {
//       dispatch({ type: WISHLIST_REQUEST_FAILURE });
//     });
// };

export const getWishlist = () => (dispatch) => {
  const token = localStorage.getItem("token");

  if (!token) {
    dispatch({ type: WISHLIST_REQUEST_FAILURE });
    return;
  }

  const config = {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  };

  axios.get("https://recipe-application-json.onrender.com/wishlist/", config)
    .then((res) => {
      console.log(res.data)
      dispatch({ type: GET_WISHLIST_REQUEST_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: WISHLIST_REQUEST_FAILURE });
      console.log(err)
    });
};

export const RemoveFromWishlist = (id) => async (dispatch) => {
  const token = localStorage.getItem("token");

  if (!token) {
    dispatch({ type: WISHLIST_REQUEST_SUCCESS });
    return;
  }

  const config = {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  };
  console.log("ID",id)
  try {
    let res = await axios.delete(`https://recipe-application-json.onrender.com/wishlist/delete/${id}`,config);
    // alert(res.data)
    console.log("delete",res);
    dispatch({ type: REMOVE_WISHLIST_REQUEST_SUCCESS});
  } catch (err) {
    console.log(err)
    dispatch({ type: WISHLIST_REQUEST_FAILURE });
  }
};




