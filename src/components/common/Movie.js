import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { connect } from 'react-redux'
import {deleteMovie} from '../../actions/movieActions'
import { addFavorites, deleteFavorites } from '../../actions/favoritesActions'

const Movie = (props) => {
    const { id } = useParams();
    const { push } = useHistory();

    const {movie, deleteMovie, addFavorites} = props;
    const mvi = movie?.find(mv=>mv?.id===Number(id));
    
    return(<div className="modal-page col">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">						
                        <h4 className="modal-title">{mvi?.title === undefined  || mvi?.title === null ? 
                                           '' : mvi?.title} Details</h4>
                    </div>
                    <div className="modal-body">
                        <div className="flexContainer">

                            <section className="movie-details">
                                <div>
                                    <label>Title: <strong>{mvi?.title === undefined  || mvi?.title === null ? 
                                           '' : mvi?.title

                                    }</strong></label>
                                </div>
                                <div>
                                    <label>Director: <strong>{
                                            mvi?.director === undefined  || mvi?.director === null ? 
                                           '' : mvi?.director

                                    }</strong></label>
                                </div>
                                <div>
                                    <label>Genre: <strong>{mvi?.genre === undefined  || mvi?.genre === null ? 
                                           '' : mvi?.genre}</strong></label>
                                </div>
                                <div>
                                    <label>Metascore: <strong>{
                                            mvi?.metascore === undefined  || mvi?.metascore === null ? 
                                           '' : mvi?.metascore

                                    }</strong></label>
                                </div>
                                <div>
                                    <label>Description:</label>
                                    <p><strong>{

                                        mvi?.description === undefined  || mvi?.description === null ? 
                                           '' : mvi?.description
                                    }</strong></p>
                                </div>
                            </section>
                            
                            <section>
                                <span className="m-2 btn btn-dark" onClick={() => {
                                    addFavorites(movie)
                                    
                                }}>Favorite</span>
                                <span className="delete" onClick={() => {
                                    deleteMovie(movie?.id);
                                    deleteFavorites(movie?.id);
                                    push('/movies') ;
                                }
                                }><input type="button" className="m-2 btn btn-danger" value="Delete"/></span>
                            </section>
                        </div>
                    </div>
                </div>
        </div>
    </div>);
}
const mapStateToProps = (state) => {
    return({
        movie: state?.movieReducer?.movie,  displayFavorites: state?.favoriteReducer?.displayFavorites
    })
}

export default connect(mapStateToProps,{deleteMovie, addFavorites, deleteFavorites})(Movie);