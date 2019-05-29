class MoviesApiService{
    constructor(){
      this.apiUrl = 'https://yts.am/api/v2/list_movies.json';
    }
    
    async getAllMovie(){
      const response = await fetch('https://yts.am/api/v2/list_movies.json');
      const data = await response.json();
      console.log(data.data);
      return data.data;
      
    }
    
    async getMovieById(id){
      const response = await fetch(`https://yts.am/api/v2/movie_details.json?movie_id=${id}`);
      const data = await response.json();
      return data.data;
    }
  }
  
  const _instance = new MoviesApiService();
  export default _instance;