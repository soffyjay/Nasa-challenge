import * as actions from "./ActionTypes";

const defaultState = {
  loading: false,
  data: null,
  error: false,
};

export const picture = (state = defaultState, action) => {
  switch (action.type) {
    case actions.FETCH_PICTURE_REQUEST:
      return { ...state, error: false, loading: true };
    case actions.FETCH_PICTURE_SUCCESS:
      return { ...state, loading: false, data: action.data };
    case actions.FETCH_PICTURE_FAILURE:
      return { ...state, error: action.error };

    default:
      return state;
  }
};
export const movies = (state = defaultState, action) => {
  switch (action.type) {
    case actions.FETCH_MOVIES_REQUEST:
      return { ...state, error: false, loading: true };
    case actions.FETCH_MOVIES_SUCCESS:
      return { ...state, loading: false, data: action.data?.results };
    case actions.FETCH_MOVIES_FAILURE:
      return { ...state, error: action.error };

    default:
      return state;
  }
};

export const singleMovie = (state = defaultState, action) => {
  switch (action.type) {
    case actions.FETCH_SINGLE_MOVIE_REQUEST:
      return { ...state, error: false, loading: true };
    case actions.FETCH_SINGLE_MOVIE_SUCCESS:
      return { ...state, loading: false, data: action.data };
    case actions.FETCH_SINGLE_MOVIE_FAILURE:
      return { ...state, error: action.error };

    default:
      return state;
  }
};
