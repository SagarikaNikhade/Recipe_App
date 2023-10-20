import { RECIPE_FAILURE, RECIPE_REQUEST, GET_RECIPE_SUCCESS,ADD_RECIPE_SUCCESS} from "./actionTypes";
import axios from "axios";

export const getRecipe = (page,query) => (dispatch) => {
  const limit = 10;
  dispatch({ type: RECIPE_REQUEST });

  // Define the URL with the query parameter
  const apiKey = "e4c5ecbfd2bf47e3a0c90a9e22e8c387";
  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}`;

  axios.get(url,{
    params:{
      number:limit,
      offset:(page-1)*limit,
      query:query
    }
  })
    .then((res) => {
      dispatch({ type: GET_RECIPE_SUCCESS, payload: res.data });
      // console.log(`Fetching page ${page} with query: ${query}`);

      console.log(res.data.results)
    })
    .catch((error) => {
      dispatch({ type: RECIPE_FAILURE });
    });
};

export const addToWishlist = (image, title) => (dispatch) => {
  const cartData = { image, title };
  const token = localStorage.getItem("token");

  if (!token) {
    alert("Please log in first to add to wishlist.");
    return;
  }

  dispatch({ type: RECIPE_REQUEST });

  const config = {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  };

  axios
    .post('https://recipe-application-json.onrender.com/wishlist/addtocart', cartData, config)
    .then((res) => {
      console.log('addtowish', res);

      dispatch({ type: ADD_RECIPE_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: RECIPE_FAILURE });
    });
};
