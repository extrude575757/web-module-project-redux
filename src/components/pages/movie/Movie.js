import React, {useState,useEffect} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { connect } from 'react-redux'
import {deleteMovie} from '../../../actions/movieActions'
import { addFavorites, deleteFavorites } from '../../../actions/favoritesActions'
import MovieRender  from './MovieRender';
const Movie = ({...props}) => {
    const { id } = useParams();
    // const { push } = useHistory();
    const [ mvi, setMvi ] = useState([]);
    const {movie, deleteMovie, addFavorites} = props;
    // setMvi( function(){
    //     movie?.find(mv=>mv?.id===Number(id))
    // });
    // const letsfind = () =>{
    //     const mvi = movie.find(mv=>mv?.id===Number(id));
    //     return mvi;
    // }
    useEffect(() =>{
          setMvi(movie?.find(mv=>mv.id===Number(id)));
 
}, []);
    
    // Move to container from a hook 
    const letsfindid = () =>{
        // Find movie description by id
        const mmv = movie?.find(mv=>mv?.id===Number(id));
        return mmv;
    }
    // Move to container and into a use state to map props
    const kn = () =>{
        const theobj = letsfindid();
        console.log(theobj?.id);
        console.log(mvi);
    }
    return( 
    <div className="modal-page col">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">						
                        <h4 className="modal-title">{mvi?.title}</h4>
                    </div>
                    <div className="modal-body">
                       <MovieRender curMovie={mvi}/>
                    </div>
                </div>
        </div>
    </div>);
}
const mapStateToProps = (state) => {
    return({
        movie: state.movieReducer.movie[1],  
        isFetching: state.movieReducer.isFetching,
        displayFavorites: state.favoriteReducer.displayFavorites
    })
}

export default connect(mapStateToProps,{deleteMovie, addFavorites, deleteFavorites})(Movie);