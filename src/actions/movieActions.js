import axios from "axios";

export const GETTING_MOVIES = "GETTING_MOVIES";
export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE";
export const GET_MOVIES = "GET_MOVIES";
export const ERR = "ERR";
export const deleteMovie = (id)=>{
    return({type: DELETE_MOVIE, payload:id});
}




export const getMovies = () => {
    const URL = 'https://movie-kdb.herokuapp.com/api/movie'
    const movies = axios.get(`${URL}`);

      return dispatch =>{
        movies
        .then(response => {
          console.log(response);
          dispatch({ type: ADD_MOVIE, payload: response.data.movie });
        })
        .catch(err => {
          dispatch({ type: ERR, payload: err });
        });
      }
  
  };
  



// export const addMovie = (movie)=>{
//     return dispatch  =>{
//         dispatch({type:"ADD_MOVIE", payload:movie});

//     }
// }






export const addMovie = (movie)=>{console.log(movie)
    return({type: ADD_MOVIE, payload:movie});
}


// //Movie search by id
// export const submitSearch = showall => {
//     return dispatch => {
//       dispatch({type: "MOVIE_START", payload: showall})
//       axios.get(`https://cors-anywhere.herokuapp.com/https://movie-kdb.herokuapp.com/api/movie`)
//       .then(res => {
//         if(res.data.error){
//           dispatch({type: 'ERR', payload: res.data.error })
//         } else {
//           dispatch({type: 'ADD_MOVIE', payload: res.data.movies})
//         }
//       })
//       .catch(error => console.log(error.message))
//     }
//   }