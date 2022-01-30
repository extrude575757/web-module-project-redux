import React, {useState} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { connect } from 'react-redux'
import {deleteMovie} from '../../actions/movieActions'
import { addFavorites, deleteFavorites } from '../../actions/favoritesActions'
const axios = require('axios'); 
const MovieZone = (props) => { 
    const { push } = useHistory(); 
    const {curMovie, deleteMovie, addFavorites} = props;
 
    return ( 
        <div className="flexContainer">

        <section className="movie-details">
            <div>
                <label>Title: <strong>{ 
                movie.title

                }</strong></label>
            </div>
            <div>
                <label>Director: <strong>{
                       curMovie?.director

                }</strong></label>
            </div>
            <div>
                <label>Genre: <strong>{curMovie?.genre}</strong></label>
            </div>
            <div>
                <label>Metascore: <strong>{
                        curMovie?.metascore

                }</strong></label>
            </div>
            <div>
                <label>Description:</label>
                <p><strong>{
            curMovie?.description
                }</strong></p>
            </div>
        </section>
        
        <section>
            <span className="m-2 btn btn-dark" onClick={() => {
                addFavorites(curMovie)
                
            }}>Favorite</span>
            <span className="delete" onClick={() => {
                deleteMovie(curMovie?.id);

                deleteFavorites(curMovie?.id);
                
                push('/movies') ;
            }
            }><input type="button" className="m-2 btn btn-danger" value="Delete"/></span>
        </section>
    </div>
    );
        }
    const mapStateToProps = (state) => {
        return({
            movie: state.movieReducer.movie[1],  
            displayFavorites: state.favoriteReducer.displayFavorites
        })
    }
    
    export default connect(mapStateToProps,{deleteMovie, addFavorites, deleteFavorites})(MovieZone);