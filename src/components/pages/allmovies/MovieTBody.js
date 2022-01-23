import React, {useEffect} from 'react';
import { connect } from 'react-redux'
import { getMovies, getMoviesFail,getMoviesStart } from '../../../actions/movieActions'
import MovieListItem from '../../common/MovieListItem';

const MovieTBody = ( {...props})=> {
    const {movie, isFetching, error} = props;
    // useEffect(() =>{
    //     // if(isFetching){
    //     //     // props.getMoviesStart();
    //     //     // console.log('isFetching'+movie);
    //     // }else if(isFetching === false && movie?.length === 1 && movie?.length !== undefined) {
    //     //     props.getMovies();
    //     //     // console.log(movie);
    //     // }else{
            
    //     //     if(movie.length > 0 && movie.length !== undefined ){
    //     //         console.log('MvList19 '+movie[1]?.movie);
    //     //     }
    //     //     props.getMoviesFail('Just to make it go false');
    //     // }
    //     console.log('why');

    // }, [{}]);
    const mvlist = () =>{
        return (
            
                movie && movie.map(mv=><MovieListItem key={mv.id} 
                    id={mv.id}title={mv.title}director={mv.director}
                    genre={mv.genre}metascore={mv.metascore}movie={mv}/>)
                     
                    
        )
    }

    return (


        <tbody>
            {mvlist()}
        </tbody>
       
    );
}

const mapStateToProps = ({...state}) => {
    return({
        movie: state?.movieReducer?.movie[1],
        isFetching: state?.movieReducer?.isFetching
    })
}

export default connect(mapStateToProps,{getMovies,getMoviesFail,getMoviesStart}) (MovieTBody);