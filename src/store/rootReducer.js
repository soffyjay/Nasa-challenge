import { movies, singleMovie, picture } from "./Reducers";
import { combineReducers } from "redux";

export default combineReducers({
  movies,
  singleMovie,
  picture,
});
