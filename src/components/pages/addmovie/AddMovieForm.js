import React, { useState } from 'react';
import { addMovie } from '../../../actions/movieActions';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

const AddMovieForm = (props) => {
    // Add to container 
    // const { push } = useHistory();
    // const {addMovie} = props;

    // const [movie, setMovie] = useState({
    //     title: "",
    //     director: "",
    //     genre: "",
    //     metascore: 0,
    //     description:"", 
    //     id:0,
    //     date: Date.now()
    // });

    // const handleChange = (e) => {
    //     setMovie({
    //         ...movie,
    //         [e.target.name]: e.target.value
    //     });
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     addMovie(movie)
    //     console.log(movie)
    
    //     push('/movies/')
    // }
    const {movie} = props;

    const { title, director, genre, metascore, description } = movie;
    return(
    <div className="col">
        <div className="modal-dialog">
            <div className="modal-content">
                <form onSubmit={props.handleSubmit}>
                    <div className="modal-header">						
                        <h4 className="modal-title">Add Movie</h4>
                    </div>

                    <div className="modal-body">					
                        <div className="form-group">
                            <label>Title</label>
                            <input value={title} onChange={props.handleChange} name="title" type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Director</label>
                            <input value={director} onChange={props.handleChange} name="director" type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Genre</label>
                            <input value={genre} onChange={props.handleChange} name="genre" type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Metascore</label>
                            <input value={metascore} onChange={props.handleChange} name="metascore" type="number" className="form-control"/>
                        </div>		
                        <div className="form-group">
                            <label>Description</label>
                            <textarea value={description} onChange={props.handleChange} name="description" className="form-control"></textarea>
                        </div>
                        			
                    </div>
                    <div className="modal-footer">
                        <input type="submit" className="btn btn-success" value="Add"/>
                        <Link to={`/movies`}><input type="button" className="btn btn-default" value="Cancel"/></Link>
                    </div>
                </form>
            </div>
        </div>
    </div>);
}
const mapStateToProps = (state) => {
    return ({})
}

export default connect(mapStateToProps,{addMovie})(AddMovieForm);