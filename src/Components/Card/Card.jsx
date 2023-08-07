import { Link } from "react-router-dom"
import getPokemonPic from "../../APIs/getPokemonPic"
import "./Card.css"

const Card = ({id, name}) => {
    id = id+1
  return (
    <div className="card">
        <Link to={`/poke/${id}/${name}`}>
            <img src={getPokemonPic(id)} alt={name} />
            <p>{name + " " + id}</p>
        </Link>
    </div>
  )
}

export default Card