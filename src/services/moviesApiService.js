class moviesApiService{
    constructor(){
      this.apiUrl = 'https://yts.am/api/v2/list_movies.json';
    }
    
    async getAllPokemon(){
      const response = await fetch('https://yts.am/api/v2/list_movies.json');
      const data = await response.json();
      return data;
    }
    
    async getPokemonById(id){
      const response = await fetch(`https://yts.am/api/v2/list_movies.json/${id}`);
      const data = await response.json();
      return data;
    }
  }
  
  const _instance = new PokeApiService();
  export default _instance;