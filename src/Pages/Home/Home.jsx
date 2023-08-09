import axios from "axios"
import getPokemons from "../../APIs/getPokemons"
import { useContext, useEffect, useRef } from "react"
import Card from "../../Components/Card/Card";
import PageContext from "../../Context/PageContext";
import "./Home.css"
const Home = () => {

  const regex = useRef(/\/(\d+)\//);

  const {pokemons, setPokemons} = useContext(PageContext);

  useEffect(() => {
    axios.get(getPokemons(1)).then((res) => setPokemons({next: res.data.next, prev: res.data.previous, results: res.data.results}))
  }, [])
  

  return (
    <>
      <div id="cards">

        {pokemons && pokemons.results.map((elem,idx) => {
          return (
          <Card key={idx} id={elem.url.match(regex.current)[1]} name={elem.name} />
          )
        })}

      </div>
    </>
  )
}

export default Home