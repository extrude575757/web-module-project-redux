import React, {useState} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { connect } from 'react-redux'
import {deleteMovie} from '../../../actions/movieActions'
import { addFavorites, deleteFavorites } from '../../../actions/favoritesActions'
// import {MovieRender } from './MovieRender';
const MovieRender = (props) => {
    // // Move to container
    // const { id } = useParams();
    const { push } = useHistory();
    // const [ mvi, setMvi ] = useState(0);
    const {curMovie, deleteMovie, addFavorites} = props;
    // setMvi( function(){
    //     movie?.find(mv=>mv?.id===Number(id))
    // });
    // // Move to container from a hook 
    // const letsfindid = () =>{
    //     // Find movie description by id
    //     const mvi = movie?.find(mv=>mv?.id===Number(id));
    //     return mvi;
    // }
    // // Move to container and into a use state to map props
    // const kn = () =>{
    //     const theobj = letsfindid();
    //     console.log(theobj.id);
    // }
    return ( 
        <div className="flexContainer">

        <section className="movie-details">
            <div>
                <label>Title: <strong>{ 
                curMovie?.title

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
    
    export default connect(mapStateToProps,{deleteMovie, addFavorites, deleteFavorites})(MovieRender);