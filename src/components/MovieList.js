import {React, useState, useEffect} from 'react';
import { connect } from 'react-redux'
import MovieListRender from './MovieListRender';
import MovieListListRender from './MovieListListRender';
// import MovieListItem from './MovieListItem';
import MovieFooter from './MovieFooter';
import { getMovies } from '../actions/movieActions';
// import movies from '../data';

const MovieList = (props)=> {
    const [isMv,setIsMv] = useState(false);
    const {movies, gettingMovies} = props;
    const cMV = () =>{
        if(!isMv){
            
            getMovies();
            console.log(movies);
            setIsMv(true);
           
        }
    }
useEffect(() =>{
        cMV();
},[movies])
    return (
        <MovieListListRender key={movies}  movies={movies}/>
    );
}

const mapStateToProps = state => {
    const {movieReducer} = state;
    return{
        movies: movieReducer.movies,
        gettingMovies: movieReducer.gettingMovies, 
    }
}

export default connect(mapStateToProps,{getMovies}) (MovieList);