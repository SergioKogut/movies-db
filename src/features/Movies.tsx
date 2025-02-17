import { Movie } from "../reducers/movies";
import { connect } from "react-redux";
import { RootState } from "../store";
import { MovieCard } from "./MovieCard";
import "./Movies.css";
interface Props {
  movies: Movie[];
}

function Movies({ movies }:  Props) {
  return (
    <section>
      <div className="Movies-list">
        {movies.map((m) => (
          <MovieCard
            key={m.id}
            id={m.id}
            title={m.title}
            overvies={m.overvies}
            popularity={m.popularity}
          />
        ))}
      </div>
    </section>
  );
}

const mapStateToProps = (state: RootState) => ({
  movies: state.movies.top,
});

const connector = connect(mapStateToProps);

export default connector(Movies);
