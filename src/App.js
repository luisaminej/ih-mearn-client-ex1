import logo from './logo.svg';
import './App.css';
import Proyectos from './components/Proyectos'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Chilaquiles from './components/Chilaquiles';
import Vitamins from './components/Vitamins'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import ProyectoState from './context/proyectos/ProyectoState'
import ChilaquilesState from './context/chilaquiles/ChilaquilesState'
import VitaminsState from './context/vitamins/VitaminsState'


function App() {
  return (
    <>

    <ProyectoState>
    <ChilaquilesState>
    <VitaminsState>
        <Router>

          <Switch>
          <Route exact path="/vitamins" component={Vitamins} />
          <Route exact path="/chilaquiles" component={Chilaquiles} />
            <Route exact path="/proyectos" component={Proyectos} />
            <Route exact path="/" component={Home} />

            <Route component={NotFound} />

          </Switch>

        </Router>
        </VitaminsState>
        </ChilaquilesState>
      </ProyectoState>
      

      

    </>
  );
}

export default App;