import React, { useEffect } from "react";
import {
  fetchMovies,
  fetchSingleMovie,
  fetchPicture,
} from "../../store/Actions";
import { useDispatch, useSelector } from "react-redux";
import Card from "../card/Card";
import "./HomeStyle.css";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchPicture());
  }, []);

  const movieData = useSelector((state) => state.movies.data);
  const pictureOfDay = useSelector((state) => state.picture.data);

  console.log(movieData);
  return (
    <div className="home">
      <header className="picture-of-day">
        <div>
          <h1>NASA: Picture of the Day</h1>
          {/* <h2>{new Date()}</h2> */}
        </div>
        <div>
          <img src={pictureOfDay?.hdurl} />
        </div>
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
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
