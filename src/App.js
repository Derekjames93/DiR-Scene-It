import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from './pages/Movie';
import WatchList from './pages/WatchList';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <nav>
          <Link to="/movies">Movies</Link>
        </nav>
        <nav>
          <Link to="/watchlist">Watchlist</Link>
        </nav>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/movies" exact>
            <Movie />
          </Route>
          <Route path="/watchlist" exact>
            <WatchList />
          </Route>
        </Switch>
      </div>
      
    </Router>
  );
}

export default App;
