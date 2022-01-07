import React, {useEffect} from 'react';
import { connect } from 'react-redux'
import { getMovies, getMoviesFail,getMoviesStart } from '../actions/movieActions'
import MovieListItem from './MovieListItem';
import MovieFooter from './MovieFooter';
// import movies from '../data';

const MovieList = (props)=> {
    const {movie, isFetching, error} = props;
    useEffect(() =>{
        if(isFetching){
            // console.log('isFetching'+movie);
        }else if(isFetching === false && movie?.length === 1 && movie?.length !== undefined) {
            props.getMovies();
            // console.log(movie);
        }else{
            
            console.log(movie);
            props.getMoviesFail('');
        }
    }, [{}]);
    

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
                    //     props.getMoviesFail("Snaps")
                    
                    }
                </tbody>
            </table>
            
            <MovieFooter totalMovies={movie.length}/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return({
        movie: state.movieReducer.movie,
        isFetching: state.movieReducer.isFetching
    })
}

export default connect(mapStateToProps,{getMovies,getMoviesFail,getMoviesStart}) (MovieList);