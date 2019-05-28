import React from 'react';
import CardDetail from '../../components/CardDetail';
import MovieApiInstance from './../../services/MoviesApiService'; //Hacemos uso de la instancia de MovieService

class DetailMovie extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      Movie: {},
      error: null, //Para hacer un ejemplo manejando el error.
    }
  }

  async componentDidMount(){
    ///En este ciclo de vida nosotros obtenemos y usamos las props que vienen del router. 
    //Como recomendación imprimir en consola las propiedades para debuggear todo lo que trae, en este caso nos importan el valor de 'match'.

    const { match } = this.props; //Match nos trae datos importantens, en este caso todos los queryParams
    const { params } = match; //Podemos usar destructuring hasta obtener los params.
    const { idMovie } = params;

    /*
      Otra manera de usar el destructuring de objetos es 
      const {
        match:{
          params: {
            idMovie
          }
        }
      } = this.props 
    */

    if (idMovie.length > 0) { //Si tengo un Id, entonces ejecutar. Podria ser 0 el id por lo que no puedo poner un !idMovie
      MovieApiInstance.getMovieById(idMovie)
      .then( //Ejemplo Con promesas
        Movie => {
          this.setState({
            Movie,
          });
        }
      ).catch(
        error => this.setState({error})
      );
      
    }

  }

  render(){
    const { Movie, error } = this.state;
    return(
      <div className="detail-Movie">
        {
          error ? <h1> Ocurrió un errrorr!!!!!! </h1>
          : 
          !Movie 
          ? <h2> No hay Movie cargado aún, esperando... </h2>
          : <CardDetail {...Movie} />
        }
      
      </div>
    );
  }
}

export default DetailMovie;