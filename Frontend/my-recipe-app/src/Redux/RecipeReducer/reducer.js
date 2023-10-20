import { RECIPE_FAILURE, RECIPE_REQUEST,GET_RECIPE_SUCCESS,ADD_RECIPE_SUCCESS} from "./actionTypes"

const initialState = {
  isLoading: false,
  isError: false,
  recipes:[],
}

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case RECIPE_REQUEST:
      return { ...state, isLoading: true }
    case RECIPE_FAILURE:
      return { ...state, isLoading: false, isError: true }
      case GET_RECIPE_SUCCESS:
        return { ...state, isLoading: false, recipes:payload }
        case ADD_RECIPE_SUCCESS :
          return { ...state, isLoading: false}
    default:
      return state;
  }
}