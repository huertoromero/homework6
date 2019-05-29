import React from 'react';
import { Link } from 'react-router-dom';

const styles = { //Styled Component!
  content: {
    textAlign: 'center',
  }
};
const Card = (props ) =>{
  console.log(props)
 return( 
  <div className="col m6">
    <div className="card horizontal">
        <div className="card-stacked">
          <div className="card-content" style={styles.content}>
            <Link to={`/movie/${props.id}`} >
              <h2> { props.title_english } </h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
 )}

export default Card;