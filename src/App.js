import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PokemonDetail from './components/pokemon-detail';
import Home from "./components/home/home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/detail">
            <PokemonDetail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
