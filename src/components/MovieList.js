import React, {useEffect} from 'react';
import { connect } from 'react-redux'
import { getMoviesStart } from '../actions/movieActions'
import MovieListItem from './MovieListItem';
import MovieFooter from './MovieFooter';
// import movies from '../data';

const MovieList = (props)=> {
    useEffect(() =>{
        props.getMoviesStart();
    }, []);
    const {movie} = props;

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
                        movie?.map(mv=><MovieListItem key={mv?.id} 
                        
                        movie={movie}/>)
                    }
                </tbody>
            </table>
            
            <MovieFooter totalMovies={movie?.length}/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return({
        movie: state?.movieReducer?.movie
    })
}

export default connect(mapStateToProps,{getMoviesStart}) (MovieList);