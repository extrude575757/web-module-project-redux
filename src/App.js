import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import {MovieList} from './components/pages/allmovies';
import Movie from './components/pages/movie/Movie';
import MovieHeader from './components/common/MovieHeader';
import AddMovieForm from './components/pages/addmovie/AddMovieForm';
import FavoriteMovieList from './components/common/FavoriteMovieList';

const App = props => {
  const {displayFavorites} = props;

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand" ><img width="40px" alt="" src="./Lambda-Logo-Red.png"/>Nicholas Lacapria's Redux Module Project</span>
      </nav>

      <div className="container">
        <MovieHeader/>
        <div className="row ">
          {displayFavorites && <FavoriteMovieList/>}
        
          <Switch>
            <Route exact path="/movies/add">
              <AddMovieForm />
            </Route>

            <Route path="/movies/:id">
              <Movie />
            </Route>

            <Route path="/movies">
              <MovieList/>
            </Route>

            <Route path="/">
              <Redirect to="/movies"/>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return ({
    displayFavorites: state.favoriteReducer.displayFavorites
  })
}
export default connect(mapStateToProps,{})(App);