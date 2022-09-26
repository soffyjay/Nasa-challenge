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

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchPicture());
  }, []);

  const movieData = useSelector((state) => state.movies.data);
  const pictureOfDay = useSelector((state) => state.picture.data);

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
          {/* <h2>{new Date()}</h2> */}
        </div>

        <img src={pictureOfDay?.hdurl} />
      </header>
      <div className="home-container">
        <div className="movie-list">
          {movieData &&
            movieData?.map((movie) => (
              <Card
                title={movie.title}
                description={movie.overview}
                popularity={movie.popularity}
                releaseDate={movie.release_date}
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
