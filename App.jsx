
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AnimeDetails from './AnimeDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/animedetails:mal_id">
            <AnimeDetails />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
