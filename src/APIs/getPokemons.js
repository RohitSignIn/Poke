const getPokemons = (page) => {
   if(page == 1){
       return "https://pokeapi.co/api/v2/pokemon/";
    }else{
        return `https://pokeapi.co/api/v2/pokemon/?offset=${page*10}&limit=20`;
    }
}
export default getPokemons;