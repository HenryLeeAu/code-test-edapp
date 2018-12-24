import React, { Component } from 'react';
import SearchBox from 'components/SearchBox';
import MovieList from 'components/MovieList';
import MovieDetail from 'components/MovieDetail';
//import Pagination from 'components/Pagination';
import ProfileBox from 'components/ProfileBox';
import GenreList from 'components/GenreList';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="sidebar">
          <div className="movieListWrap" />
          Lucky 7 Hub
          <GenreList />
          <ProfileBox />
        </div>
        <div className="detail">
          <div>
            <form>
              <SearchBox />
            </form>
          </div>
          <MovieList />
          <MovieDetail />
        </div>
      </div>
    );
  }
}

export default App;
