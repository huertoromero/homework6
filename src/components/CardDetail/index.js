import React from 'react';
import { Link } from 'react-router-dom';

const CardDetail =  ({title, description_intro,background_image_original }) =>{
  console.log(title);
return ( //Card que va a renderizar los datos que traemos unicamente.
  <div className="card-detail">
    <div className="container">
      <div className="row">
        <div className="col s12">
          <div className="card">
            <img src={background_image_original} ></img>
            </div>
            
              <div className="card-content">
                  <ul>
                  <li>
                      <strong> Titulo: </strong> <span> {title}</span>
                    </li>
                    
                    <li>
                      <strong> Descripcion: </strong> <span> {description_intro}</span>
                    </li>
                    
                  </ul>
              </div>
            
              <div className="card-action">
                <Link to='/'>
                  Volver al listado
                </Link>
              </div>
            </div>
          </div>
        </div>

    </div>
 
)};

export default CardDetail;