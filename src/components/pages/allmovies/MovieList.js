import React, {useEffect} from 'react';
import { connect } from 'react-redux'
import { getMovies, getMoviesFail,getMoviesStart } from '../../../actions/movieActions'
import {MovieListItem} from '../../common';
import {MovieFooter} from '../../common';
// import movies from '../data';
import MovieTBody from './MovieTBody';
const MovieList = ( props)=> {
    const {movie, isFetching, error} = props;
    useEffect(() =>{
        if(isFetching){
            // props.getMoviesStart();console.log('isFetching'+movie);
        }else if(isFetching === false && movie?.length === 1 && movie?.length !== undefined) {
            props.getMovies();
            // console.log(movie);
        }else{
            
            if(movie.length > 0 && movie.length !== undefined ){
                console.log('MvList19 '+movie+' '+movie[1]?.movie);
            }
            props.getMoviesFail('Just to make it go false');
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

                {  
                    <MovieTBody /> 
                }
            </table>
            
            <MovieFooter totalMovies={ movie[1]?.length}/>
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