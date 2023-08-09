import { useContext, useState } from "react"
import PageContext from "../../Context/PageContext"
import getPokemons from "../../APIs/getPokemons"
import axios from "axios"
import Loading from "../Loading/Loading"
import "./style.css"

const Pagination = () => {

    const {pokemons, setPokemons} = useContext(PageContext)
    const [page, setPage] = useState(1); 
    const [loading, setLoading] = useState(false);
  
    const pagination = async (action) => {
        let nextPage = 0;
        if(pokemons[action]){
          nextPage = (action == "next") ? page+1 : page-1;
          const res = await axios.get(getPokemons(nextPage));
          setPokemons({next: res.data.next, prev: res.data.previous, results: res.data.results})
          setPage(nextPage);
        }
        setLoading(false)
  }

  return (
    <>
          {loading && <Loading />}
      <div id="pagination"> 
        <button onClick={() => {setLoading(true); pagination("prev")}}> &lt;</button>
        <p>Page {page}</p>
        <button onClick={() => {setLoading(true); pagination("next")}}>&gt;</button>
      </div>
    </>
  )
}

export default Pagination