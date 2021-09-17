import './App.css';
import Header from '../Header/Header';
import { Route, Switch } from 'react-router-dom';
import America from '../America/America'
import Antartica from '../Antartica/Antartica';
import  Asia from '../Asia/Asia';
import Oceania from '../Oceania/Oceania'
import Europa from '../Europa/Europa';
import Inicio from '../Inicio/Inicio';

import Norte from '../America/Norte/Norte'
import Central from '../America/Central/Central'
import Sul from '../America/Sul/Sul'
import Equador from '../America/Equador/Equador'
import Inferiores from '../America/Inferiores/Inferiores'

import Pantanal from '../America/Sul/Pantanal/Pantanal'
import Patagonia from '../America/Sul/Patagonia/Patagonia'
import Andes from '../America/Sul/Andes/Andes'
import Cartagena from '../America/Sul/Cartagena/Cartagena'
import Quilotoa from '../America/Sul/Quilotoa/Quilotoa'

import Hidrografia from '../America/Sul/Pantanal/Hidrografia/Hidrografia'
import Clima from '../America/Sul/Pantanal/Clima/Clima'
import Fauna from '../America/Sul/Pantanal/Fauna/Fauna'
import Flora from '../America/Sul/Pantanal/Flora/Flora'
import Desmatamento from '../America/Sul/Pantanal/Desmatamento/Desmatamento'

function App() {
  return (
    <div>

      <Header/>

      <main>
        <Switch>
        <Route exact path ="/inicio" render = {(props) => <Inicio/>}></Route>
        <Route exact path ="/america" render = {(props) => <America/>}></Route>
          <Route exact path ="/asia" render = {(props) => <Asia/>}></Route>
          <Route exact path ="/antartica" render = {(props) => <Antartica/>}></Route>
          <Route exact path ="/oceania" render = {(props) => <Oceania/>}></Route>
          <Route exact path ="/europa" render = {(props) => <Europa/>}></Route>

          <Route exact path ="/america/norte" render = {(props) => <Norte/>}></Route>
          <Route exact path ="/america/central" render = {(props) => <Central/>}></Route>
          <Route exact path ="/america/sul" render = {(props) => <Sul/>}></Route>
          <Route exact path ="/america/equador" render = {(props) => <Equador/>}></Route>
          <Route exact path ="/america/inferiores" render = {(props) => <Inferiores/>}></Route>

          <Route exact path ="/america/sul/patagonia" render = {(props) => <Patagonia/>}></Route>
          <Route exact path ="/america/sul/andes" render = {(props) => <Andes/>}></Route>
          <Route exact path ="/america/sul/cartagena" render = {(props) => <Cartagena/>}></Route>
          <Route exact path ="/america/sul/pantanal" render = {(props) => <Pantanal/>}></Route>
          <Route exact path ="/america/sul/quilotoa" render = {(props) => <Quilotoa/>}></Route>

          <Route exact path ="/america/sul/pantanal/hidrografia" render = {(props) => <Hidrografia/>}></Route>
          <Route exact path ="/america/sul/pantanal/clima" render = {(props) => <Clima/>}></Route>
          <Route exact path ="/america/sul/pantanal/fauna" render = {(props) => <Fauna/>}></Route>
          <Route exact path ="/america/sul/pantanal/flora" render = {(props) => <Flora/>}></Route>
          <Route exact path ="/america/sul/pantanal/desmatamento" render = {(props) => <Desmatamento/>}></Route>
        </Switch>
      </main>

    </div>
  );
}

export default App;
