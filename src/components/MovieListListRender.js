
import {React, useState, useEffect} from 'react';
import { connect } from 'react-redux'
import MovieListRender from './MovieListRender';
// import MovieListItem from './MovieListItem';
import MovieFooter from './MovieFooter';
import { getMovies } from '../actions/movieActions';
// import movies from '../data';

const MovieListListRender = (props)=> {
    const {movies } = props;
 
    return (
        movies && <div className="col">
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

            {<MovieListRender key={movies.id}movies={movies}/>}
        </table>
        
        { <MovieFooter key={movies.id} totalMovies={ movies?.length}/>}
    </div>
    );
}

const mapStateToProps = state => {
    const {movieReducer} = state;
    return{
        movies: movieReducer.movies,
        gettingMovies: movieReducer.gettingMovies, 
    }
}

export default connect(mapStateToProps,{}) (MovieListListRender);