// Importamos las dependencias necesarias:
import { Routes, Route } from "react-router-dom"
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux"

// Importamos los componentes necesarios:
import Landing from "../../dumbComponents/landingPage/Landing"
import Home from "../../dumbComponents/home/Home"
import DetailCountry from "../detailCountry/DetailCountry";
import CreateActivity from "../createActivity/CreateActivity";
import ShowActivities from "../showActivities/ShowActivities";

// import the store
import generateStore from '../../../redux/store/store';

// import stiles
import "./App.css"

const App = () => {

    const store = generateStore()

    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route exact path='/' element={<Landing />} />
                    <Route path='/home' element={<Home />} />
                    <Route path="/countri/:id" element={<DetailCountry />} />
                    <Route path="/activities" element={<ShowActivities />}/>
                    <Route path="/activity" element={<CreateActivity />} />
                </Routes>
            </Router>
        </Provider> 
    )
}

export default App;
