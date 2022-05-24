// Importamos las dependencias necesarias:
import { Routes, Route } from "react-router-dom"
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux"

// Importamos los componentes necesarios:
import Landing from "../landingPage/Landing"
import Home from "../home/Home"
//import Countries from "../countries/Countries"


// import the store
import generateStore from '../../../redux/store/store';

// Importamos los stilos:
import './App.css';

const App = () => {

    const store = generateStore()

    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route exact path='/' element={<Landing />} />
                    <Route path='/home' element={<Home />} />
                </Routes>
            </Router>
        </Provider> 
    )
}

export default App;
