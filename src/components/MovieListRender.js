import {React, useState, useEffect} from 'react';
import { connect } from 'react-redux'

import MovieListItem from './MovieListItem';
import MovieFooter from './MovieFooter';
import { getMovies } from '../actions/movieActions';
// import movies from '../data';

const MovieListRender = (props)=> {
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
                       
                        movies?.map(movie=><MovieListItem key={movie?.id} 
                        
                            movie={movie}/>)
                        
                    
                    }
                </tbody>
            </table>
            
            <MovieFooter totalMovies={ movies?.length}/>
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

export default connect(mapStateToProps,{getMovies}) (MovieListRender);