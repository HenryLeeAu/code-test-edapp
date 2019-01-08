import React, { Component } from 'react';
import MovieList from 'components/MovieList';
import ProfileBox from 'components/ProfileBox';
import GenreList from 'components/GenreList';
import PageToolBar from 'components/PageToolBar';
import PageTitle from 'components/PageTitle';
import PageSearchText from 'components/PageSearchText';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="sidebar">
          <div className="movieListWrap" />
          <div className="logo">
            <span>Lucky 7</span> Hub
          </div>
          <GenreList />
          <ProfileBox />
        </div>
        <div className="detail-scroll">
          <div className="detail">
          <PageToolBar />
          <PageTitle />
          <PageSearchText />
          <MovieList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
