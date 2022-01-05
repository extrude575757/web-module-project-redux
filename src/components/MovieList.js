import React, {useEffect,useState} from 'react';
import { connect } from 'react-redux'
import { getMovies, getMoviesFail } from '../actions/movieActions'
import MovieListItem from './MovieListItem';
import MovieFooter from './MovieFooter';
// import movies from '../data';

const MovieList = (props)=> {
    const [fetch,setFetch] = useState(false);
    const [error,setError] = useState(false);
    const {movie, isFetching, error} = props;
    useEffect(() =>{
        quick();
    }, [{movie}]);

    const quick = () =>{
        if(isFetching === true && error === false){
            
            if(fetch === true && error === true){
                setError(true);
                setFetch(false);
            }else if(fetch === false && error === true){
                setError(true);
                isFetching = false;
            }else{
                setError(false);
                setFetch(true); 
            }
        } else if(error === true && isFetching === false){
                setError(true);
                setFetch(false);
            }else{
                setFetch(false);
                setError(false);
            }
}

    return (
        <div className="col">
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Director</th>
                    <th>Genre</th>
                    <th>Metascore</th>
                    <th></th>
                </tr>
                </thead>

                <tbody>
                {
                    //  isFetching ? movie.map(mv=><MovieListItem key={mv.id} movie={mv}/>)
                    //  : 
                    //     getMoviesFail("Snaps")
                    
                    }
                </tbody>
            </table>
            
            <MovieFooter totalMovies={movie.length}/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return({
        movie: state.movieReducer.movie
    })
}

export default connect(mapStateToProps,{getMovies,getMoviesFail})(MovieList);