import axios from "axios"
import getPokemons from "../../APIs/getPokemons"
import { useEffect, useState } from "react"
import Card from "../../Components/Card/Card";
import "./Home.css"

const Home = () => {

  const [pokemons, setPokemons] = useState();

  useEffect(() => {
    axios.get(getPokemons()).then((res) => setPokemons({next: res.data.next, previous: null, results: res.data.results}))
  }, [])

  return (
    <>
      <div id="cards">

        {pokemons && pokemons.results.map((elem, idx) => {
          return (
          <Card key={idx} id={idx} name={elem.name} />
          )
        })}

      </div>
    </>
  )
}

export default Home