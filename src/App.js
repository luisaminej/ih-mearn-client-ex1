import logo from './logo.svg';
import './App.css';
import Proyectos from './components/Proyectos'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Chilaquiles from './components/Chilaquiles';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import ProyectoState from './context/proyectos/ProyectoState'
import ChilaquilesState from './context/chilaquiles/ChilaquilesState'


function App() {
  return (
    <>

    <ProyectoState>
    <ChilaquilesState>
        <Router>

          <Switch>
          <Route exact path="/chilaquiles" component={Chilaquiles} />
            <Route exact path="/proyectos" component={Proyectos} />
            <Route exact path="/" component={Home} />

            <Route component={NotFound} />

          </Switch>

        </Router>
        </ChilaquilesState>
      </ProyectoState>
      

      

    </>
  );
}

export default App;