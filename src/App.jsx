import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import MainRoutes from './Router/MainRoutes'
import PageContext from './Context/PageContext'
import { useState } from 'react'

function App() {

  const [pokemons, setPokemons] = useState();
  
  return (
    <>
      <PageContext.Provider value={{pokemons, setPokemons}}>
        <Header />
        <MainRoutes />
        <Footer />
      </PageContext.Provider>
    </>
  )
}

export default App
