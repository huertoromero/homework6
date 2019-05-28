import React from 'react';
import './style.scss';
import Nav from '../../components/Nav';
import ListMovie from '../../containers/ListMovie';

const Home = () => {
  return(
    <div className="home-page">
      <Nav />
      <div className="container">
          <ListMovie />
      </div>
    </div>
  );
}

export default Home;