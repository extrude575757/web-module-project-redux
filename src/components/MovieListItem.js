import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
const MovieListItem = ( {...props})=> {
  const { movie} = props;

  return(<tr key={movie?.id}>
      <td>{movie[1]?.title}</td>
      <td>{movie?.director}</td>
      <td>{movie?.genre}</td>
      <td>{movie?.metascore}</td>
      <td>
        <Link to={`/movies/${movie?.id}`} className="view">
          <input type="button" className="btn btn-secondary" value="View"/>
        </Link>
      </td>
  </tr>);
}


const mapStateToProps = ( {...state}) => {
  return({
      movie: state?.movieReducer?.movie[1]
  })
}

export default connect(mapStateToProps,{}) (MovieListItem);

 