export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE"
export const GET_MOVIES = "GET_MOVIES";
export const GET_MOVIES_START = "GET_MOVIES_START";
export const GET_MOVIES_SUCCESS = "GET_MOVIES_SUCCESS";
export const GET_MOVIES_FAIL = "GET_MOVIES_FAIL";
import axios from 'axios';
export const deleteMovie = (id)=>{
    return({type: DELETE_MOVIE, payload:id});
}

export const addMovie = (movie)=>{
    console.log(movie);
    return({type: ADD_MOVIE, payload:movie});
}

export const getMovies = () =>{
    return (dispatch)=>{
        dispatch(getMoviesStart());
        axios.get("https://movie-kdb.herokuapp.com/api/movie")
            .then(resp=> {
                console.log("res---",resp);
            // console.log("movie---",resp.data.movie);
            dispatch(getMoviesSuccess(resp.data.movie));
        })
            .catch(err=>{
            dispatch(getMoviesFail(err));
        });
    }
}

export const getMoviesStart = ()=>{
    return({type: GET_MOVIES_START});
  }
  
  export const getMoviesSuccess = (movies)=> {
    return({type: GET_MOVIES_SUCCESS, payload: movies});
  } 
  
  export const getMoviesFail = (error)=> {
    return({type: GET_MOVIES_FAIL, payload: error});
  }