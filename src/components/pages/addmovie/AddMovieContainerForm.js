import React, { useEffect, useState } from 'react' ;
import { connect } from 'react-redux';
import { addMovie } from '../../../actions/movieActions'
import { useHistory } from 'react-router-dom';
import AddMovieForm  from './AddMovieForm';
const AddMovieContainerForm  = ( {...props}) =>{
    // const {movie} = props;
    const { push } = useHistory();
    // const {addMovie} = props;

    const [mvi, setMovie] = useState({

        description:"", 
        director: "",
        genre: "",
        id:3,
        metascore: 0,
        title: ""
        // date: Date.now()
    });

    const handleChange = (e) => {
        setMovie({
            ...mvi,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addMovie(mvi)
        console.log('submit '+mvi)
    
        push('/movies/')
    }

    useEffect(()=>{
        console.log(mvi);
    },[{}]);


    return (
        <AddMovieForm handleChange={handleChange} handleSubmit={handleSubmit} 
    movie={mvi}
        />
    )

}

const mapStateToProps = (state) =>{
    return ({
        movie:state.movieReducer.movie[0]
    })
}

export default connect(mapStateToProps,{addMovie})(AddMovieContainerForm);