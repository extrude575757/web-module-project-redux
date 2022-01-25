import { ADD_MOVIE, DELETE_MOVIE, GET_MOVIE_ID, 
    GET_MOVIES_FAIL, GET_MOVIES_START, GET_MOVIES_SUCCESS } from '../actions/movieActions.js';
// import movies from './../data.js';

const initialState = {
    movie:[ {"id":0,"title":"","director":"","metascore":2,
    "genre":"","description":"","favorites":false}],
    appTitle: "IMDB Movie Database",
    isFetching: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_MOVIE_ID: 
            return ({
                ...state,
                movie: [...state.movie, action.payload]
            })
        case DELETE_MOVIE:
            return ({
                ...state,
                movie: state.movie.filter(item=>(action.payload !== item.id))
            })
        case ADD_MOVIE:
            return ({
                ...state,
                movie: [...state.movie, action.payload]
            })
        case GET_MOVIES_START:
            return ({
                ...state,
                movie: [{}],
                isFetching:true,
                error:''
            })
            case GET_MOVIES_SUCCESS:
                return ({
                    ...state,
                    movie: [...state.movie, action.payload],
                    isFetching:false,
                    error:''
            })
            case GET_MOVIES_FAIL:
                return ({
                    ...state, 
                    isFetching:false,
                    error:action.payload
        })
        default:
            return state;
    }
}

export default reducer;