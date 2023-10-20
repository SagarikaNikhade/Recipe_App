import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import {reducer as authReducer} from "./AuthReducer/reducer";
import {reducer as recipeReducer} from "./RecipeReducer/reducer";
import {reducer as wishlistReducer} from "./WishlistReducer/reducer";

const rootReducer = combineReducers({
    authReducer ,
    recipeReducer,
    wishlistReducer
})

export const store = legacy_createStore(rootReducer , applyMiddleware(thunk))