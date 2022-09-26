import * as actions from "./ActionTypes";

//ACTION CREATORS TO SPECIFY WHAT WE WOULD DISPATCH
const fetchPictureRequest = () => {
  return {
    type: actions.FETCH_PICTURE_REQUEST,
  };
};
const fetchPictureSuccess = (data) => {
  return {
    type: actions.FETCH_PICTURE_SUCCESS,
    data,
  };
};

const fetchPictureFailure = (error) => {
  return {
    type: actions.FETCH_PICTURE_FAILURE,
    error,
  };
};

const fetchMoviesRequest = () => {
  return {
    type: actions.FETCH_MOVIES_REQUEST,
  };
};

const fetchMoviesSucess = (data) => {
  return {
    type: actions.FETCH_MOVIES_SUCCESS,
    data,
  };
};

const fetchMoviesFailure = () => {
  return {
    type: actions.FETCH_MOVIES_FAILURE,
  };
};

const fetchSingleMovieRequest = () => {
  return {
    type: actions.FETCH_SINGLE_MOVIE_REQUEST,
  };
};

const fetchSingleMovieSuccess = (data) => {
  return {
    type: actions.FETCH_SINGLE_MOVIE_SUCCESS,
    data,
  };
};

const fetchSingleMovieFailure = () => {
  return {
    type: actions.FETCH_SINGLE_MOVIE_FAILURE,
  };
};

//Asynchronous actions with redux thunk
export const fetchMovies = () => {
  return (dispatch) => {
    dispatch(fetchMoviesRequest());
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&query=NASA&include_adult=false&1`
    )
      .then((response) => response.json())
      .then((data) => dispatch(fetchMoviesSucess(data)))
      .catch((err) => dispatch(fetchMoviesFailure(err)));
  };
};

export const fetchPicture = () => {
  return (dispatch) => {
    dispatch(fetchPictureRequest());
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => dispatch(fetchPictureSuccess(data)))
      .catch((err) => dispatch(fetchPictureFailure(err)));
  };
};

export const fetchSingleMovie = (id) => {
  return (dispatch) => {
    dispatch(fetchSingleMovieRequest());
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => dispatch(fetchSingleMovieSuccess(data)))
      .catch((err) => dispatch(fetchSingleMovieFailure(err)));
  };
};
