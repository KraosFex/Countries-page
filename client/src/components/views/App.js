// Importamos las dependencias necesarias:
import { Routes, Route } from "react-router-dom"

// Importamos los componentes necesarios:
import Landing from "./landingPage/Landing"
import Home from "./major/home/Home"
import Countries from "./major/countries/Countries"


// Importamos los stilos:
import './App.css';

const App = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Landing />} />
            <Route path='/home' element={<Home />} />
            <Route path='/countries' element={<Countries />} />
        </Routes>
    )
}

export default App;
