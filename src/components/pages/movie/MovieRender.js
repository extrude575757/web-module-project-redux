import React, {useState} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { connect } from 'react-redux'
import {deleteMovie} from '../../../actions/movieActions'
import { addFavorites, deleteFavorites } from '../../../actions/favoritesActions'
// import {MovieRender } from './MovieRender';
const MovieRender = (props) => {
    // const { id } = useParams();
    const { push } = useHistory();
    // const [ mvi, setMvi ] = useState(0);
    const {movie, deleteMovie, addFavorites} = props;
    // setMvi( function(){
    //     movie?.find(mv=>mv?.id===Number(id))
    // });
    const letsfind = () =>{
        const mvi = movie.find(mv=>mv?.id===Number(id));
        return mvi;
    }

    const kn = () =>{
        console.log(movie);
    }
    return (
        kn(),
        <div className="flexContainer">

        <section className="movie-details">
            <div>
                <label>Title: <strong>{ 
                movie?.title

                }</strong></label>
            </div>
            <div>
                <label>Director: <strong>{
                       movie?.director

                }</strong></label>
            </div>
            <div>
                <label>Genre: <strong>{movie?.genre}</strong></label>
            </div>
            <div>
                <label>Metascore: <strong>{
                        movie?.metascore

                }</strong></label>
            </div>
            <div>
                <label>Description:</label>
                <p><strong>{
            movie?.description
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
    );
        }
    const mapStateToProps = (state) => {
        return({
            movie: state.movieReducer.movie,  displayFavorites: state.favoriteReducer.displayFavorites
        })
    }
    
    export default connect(mapStateToProps,{deleteMovie, addFavorites, deleteFavorites})(MovieRender);