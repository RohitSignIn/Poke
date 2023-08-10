import { useParams } from "react-router-dom"
import Card from "../../Components/Card/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import getPokemon from "../../APIs/getPokemon";
import "./style/Poke.css"

const Poke = () => {
  let {name} = useParams();

  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    axios.get(getPokemon(name)).then((res) => setPokemon(res.data))
  }, [name])

  return (
    <>
      <div id="pokeCon">
        {
        pokemon && <>
        <Card id={pokemon.id} name={name} />
        <div className="details">
          <div id="abilities">
            <p>Abilities</p>
              <div>
                {
                  pokemon.abilities.map((elem) => <span key={elem.ability.name}>{elem.ability.name}</span>)
                }
              </div>
            </div>
          <div id="moves">
          <p>Moves</p>
            <div>
              {
                pokemon.moves.map((elem) => <span key={elem.move.name}>{elem.move.name}</span>)
              }
            </div>
            </div>
          </div>
        </>
        }
      </div>
    </>
  )
}

export default Poke