import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
const MovieListItem = (props)=> {
  const { id, title, director, genre, metascore} = props?.movie[1];

  return(<tr key={id}>
      <td>{title}</td>
      <td>{director}</td>
      <td>{genre}</td>
      <td>{metascore}</td>
      <td>
        <Link to={`/movies/${id}`} className="view">
          <input type="button" className="btn btn-secondary" value="View"/>
        </Link>
      </td>
  </tr>);
}


const mapStateToProps = (state) => {
  return({
      movie: state.movieReducer.movie
  })
}

export default connect(mapStateToProps,{}) (MovieListItem);

 