import { Action, Reducer } from "redux";

export interface Movie {
  id: number;
  title: string;
  popularity: number;
  overvies: string;
}

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

const moviesReducer: Reducer<MovieState, Action> = (state, action) => {
  return initialState;
};

export default moviesReducer;
