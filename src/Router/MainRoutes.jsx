import { Routes, Route } from "react-router-dom"
import Home from "../Pages/Home/Home"
import Poke from "../Pages/Poke/Poke"

const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/poke/:id/:name?" element={<Poke />} />
    </Routes>
  )
}

export default MainRoutes