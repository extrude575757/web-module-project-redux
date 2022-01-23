import React, {useState} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { connect } from 'react-redux'
import {deleteMovie} from '../../../actions/movieActions'
import { addFavorites, deleteFavorites } from '../../../actions/favoritesActions'
import MovieRender  from './MovieRender';
const Movie = (props) => {
    const { id } = useParams();
    const { push } = useHistory();
    // const [ mvi, setMvi ] = useState(0);
    const {movie, deleteMovie, addFavorites} = props;
    // setMvi( function(){
    //     movie?.find(mv=>mv?.id===Number(id))
    // });
    // const letsfind = () =>{
    //     const mvi = movie.find(mv=>mv?.id===Number(id));
    //     return mvi;
    // }
    return(
    <div className="modal-page col">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">						
                        <h4 className="modal-title">{movie?.title} Details</h4>
                    </div>
                    <div className="modal-body">
                       <MovieRender />
                    </div>
                </div>
        </div>
    </div>);
}
const mapStateToProps = (state) => {
    return({
        movie: state.movieReducer.movie[1],  displayFavorites: state.favoriteReducer.displayFavorites
    })
}

export default connect(mapStateToProps,{deleteMovie, addFavorites, deleteFavorites})(Movie);