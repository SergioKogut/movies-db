import { Action, Reducer } from "redux";

export interface Movie {
  id: number;
  title: string;
  popularity: number;
  overvies: string;
}
//Next Steps
// interface MovieNew {
//   id: number;
//   adult: boolean;
//   backdrop_path: string;
//   genre_ids: number[];
//   original_language: string;
//   original_title: string;
//   overview: string;
//   popularity: number;
//   poster_path: string;
//   release_date: string;
//   title: string;
//   video: boolean;
//   vote_average: number;
//   vote_count: number;
// }



interface MovieState {
  top: Movie[];
}

const initialState: MovieState = {
  top: [
    { id: 1, title: "Inception", popularity: 98, overvies: "Dreams...." },
    {
      id: 2,
      title: "The Godfather",
      popularity: 97,
      overvies: "Godfather....",
    },
    {
      id: 3,
      title: "The Dark Knight",
      popularity: 96.5,
      overvies: "BAtman....",
    },
    {
      id: 4,
      title: "The Godfather Part II",
      popularity: 96,
      overvies: "Part II....",
    },
  ],
};

const moviesReducer: Reducer<MovieState, Action> = (_state, _action) => {
  return initialState;
};

export default moviesReducer;
