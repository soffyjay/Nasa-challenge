import { useSelector } from "react-redux";
import "./ViewStyle.css";

//Single movie details page
const View = () => {
  //use selector to access global state
  const data = useSelector((state) => state.singleMovie.data);
  return (
    <div className="view-page">
      <img src={"https://image.tmdb.org/t/p/original/" + data?.poster_path} />
      <h2>Title:{data?.title}</h2>
      <p>Overview:{data?.overview}</p>
      <p>Vote average:{data?.vote_average}</p>
      <p>Total votes:{data?.vote_count}</p>
      <p>Status:{data?.status}</p>
      <p>
        IMDB Link:{" "}
        <a href={`https://www.imdb.com/title/${data?.imdb_id}`}>
          {data?.imdb_id}{" "}
        </a>
      </p>
      <p>Budget: {data?.budget}</p>
      <ul>
        <p>Production Countries:</p>
        {data?.production_countries.map((country) => (
          <li>{country.name}</li>
        ))}
      </ul>
      <ul>
        <p>Genres:</p>
        {data?.genres.map((genre) => (
          <li>{genre.name}</li>
        ))}
      </ul>
      <ul>
        <p>Languages:</p>
        {data?.spoken_languages.map((lang) => (
          <li>{lang.english_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default View;
