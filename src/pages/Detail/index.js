import React from 'react';
import Nav from '../../components/Nav';
import DetailMovie from '../../containers/DetailMovie';

const Detail = (props) => {
  return (
    <div className="detail-page">
      <Nav />
      <div className="container">
        <DetailMovie {...props}/>
      </div>
    </div>
  );
}

export default Detail;