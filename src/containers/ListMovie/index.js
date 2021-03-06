import React from 'react';
import Card from '../../components/Card';
import MovieService from '../../services/MoviesApiService';

class ListMovie extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      list : [],
    }
  }
  
  async componentDidMount(){
    const response = await MovieService.getAllMovie();
    const list = response.movies;


    this.setState({
      list
    });

  }
  
  render(){
    const { list } = this.state;
    return(
      <div className="list-Movie">
        <h2> Mis Movies {list.length}</h2>
        <div className="row">
          {
            list.map( (item, index) => <Card key={item.id} {...item}/>)
          }
        </div>
      </div>
    );
  }
}

export default ListMovie;