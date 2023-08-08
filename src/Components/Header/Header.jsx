import { useState } from "react"
import "./style/style.css"
import { useNavigate } from "react-router-dom";

const Header = () => {

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  return (
    <div id="header">
        <div id="logo">
          <img width={30} height={30} src="/images/pokeball.png" alt="" />
          <p>Poke</p>
        </div>
        <div>
          <input type="text" placeholder="Search pokemon..." onChange={(e) => setSearch(e.target.value)} />
          <button onClick={() => navigate(`/poke/${search}`)}>Search</button>
        </div>
    </div>
  )
}

export default Header