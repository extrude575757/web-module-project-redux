import {React, useState, useEffect} from 'react';
import { connect } from 'react-redux'

import MovieListItem from './MovieListItem'; 
// import movies from '../data';

const MovieListRender = (props)=> {
 
    const {movies} = props;
 
    return (
       

              <>
      <tbody>
                    {
                       
                        function(){
                        return(
                            movies && movies?.map(movie=><MovieListItem key={movie} 
                        
                                movie={movie}/>)
                        )
                       }
                        
                    
                    }
                </tbody>
              </>
           
    );
}

const mapStateToProps = state => {
    const {movieReducer} = state;
    return{
        movies: movieReducer.movies
    }
}

export default connect(mapStateToProps,{}) (MovieListRender);