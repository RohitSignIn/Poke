import { useParams } from "react-router-dom"
import Card from "../../Components/Card/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import getPokemon from "../../APIs/getPokemon";
import "./style/Poke.css"

const Poke = () => {
  let {id, name} = useParams();
  if(!name){
    name = id;
  }

  console.log(id, name)
  
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    axios.get(getPokemon(id)).then((res) => setPokemon(res.data))
  }, [])

  console.log(pokemon);

  return (
    <>
      <div>
        <Card id={id} name={name} />
        {
        pokemon && <div className="details">
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
        }
      </div>
    </>
  )
}

export default Poke