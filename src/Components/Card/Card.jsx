import { Link } from "react-router-dom"
import getPokemonPic from "../../APIs/getPokemonPic"
import "./Card.css"

const Card = ({id, name}) => {
  return (
    <div className="card">
        <Link to={`/poke/${id}/${name}`}>
            <img width={200} height={200} src={getPokemonPic(id)} alt={name} />
            <p>{name}</p>
        </Link>
    </div>
  )
}

export default Card