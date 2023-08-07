import { useParams } from "react-router-dom"
import Card from "../../Components/Card/Card";

const Poke = () => {
  const {id, name} = useParams();

  return (
    <>
      <div>
        <Card id={id} name={name} />
      </div>
    </>
  )
}

export default Poke