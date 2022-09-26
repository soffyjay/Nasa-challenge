import React, { useEffect } from "react";
import {
  fetchMovies,
  fetchSingleMovie,
  fetchPicture,
} from "../../store/Actions";
import { useDispatch, useSelector } from "react-redux";
import Card from "../card/Card";
import "./HomeStyle.css";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    //Dispatching actions to fetch data for movies and picture of the day
    dispatch(fetchMovies());
    dispatch(fetchPicture());
  }, []);

  const movieData = useSelector((state) => state.movies.data);
  const pictureOfDay = useSelector((state) => state.picture.data);

  // function that handles dispatch of action for single movie details
  const fetchCardDetails = (id) => {
    dispatch(fetchSingleMovie(id));

    navigate(`/card/${id}`);
  };

  return (
    <div className="home">
      <header className="picture-of-day">
        <div>
          <h1 className="picture-title">
            <span className="nasa">NASA: </span>Picture of the Day
          </h1>
          <h2 className="picture-title">
            {moment(new Date()).format("dddd, MMMM Do YYYY")}
          </h2>
        </div>

        <img src={pictureOfDay?.hdurl} />
      </header>
      <div className="home-container">
        <div className="movie-list" data-testid="movie-list">
          {!movieData && <div className="loading">Loading....</div>}
          {movieData &&
            movieData?.map((movie) => (
              <Card
                title={movie.title}
                description={movie.overview}
                popularity={movie.popularity}
                releaseDate={movie.release_date}
                moviePoster={movie.poster_path}
                image={
                  "https://image.tmdb.org/t/p/original//" + movie.poster_path
                }
                onClick={() => fetchCardDetails(movie.id)}
                id={movie.id}
                key={movie.id}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
