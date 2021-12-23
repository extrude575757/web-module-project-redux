import { ADD_MOVIE, DELETE_MOVIE, GET_MOVIES, ERR, GETTING_MOVIES } from '../actions/movieActions.js';
// import movies from './../data.js';

import { getMovies } from '../actions/movieActions';
const initialState = {
    movies: null  ,
    appTitle: "IMDB Movie Database",
    error: "",
    gettingMovies:false,
    isError: false
}

const reducer = (state = initialState, action) => {
    switch(action?.type) {
        case DELETE_MOVIE:
            return ({
                ...state,
                movies: state?.movies?.filter(item=>(action?.payload !== item?.id))
            });
        case ADD_MOVIE:
            return ({
                ...state,
                movies: [...state?.movies, action?.payload]
            });
        case GET_MOVIES:
                return ({
                    ...state, 
                    movies: [...state?.movies, action?.payload]
                });
        case GETTING_MOVIES:
            return{
                ...state,
                    gettingMovies: [...state?.gettingMovies, !action?.payload]
            }
        case ERR:
            return {
                ...state,
                isError: true,
                gettingMovies: false,
                error: action?.payload
            };
        default:
            return state;
    }
}

export default reducer;