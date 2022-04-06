import Navbar from './components/Navbar';
import Home from'./Home';
import Footer from './components/Footer';
import Interactivity from './pages/Interactivity';
import Error from './pages/Error';
import Create from './pages/Create';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Featured from './pages/FeaturedWriters';
import Library from './pages/Library';
import Poems from './pages/Poems';




function App() {
  return (
    <Router>
      <div className="app">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/create">
                <Create/>
            </Route>
            <Route exact path="/library">
                <Library/>
            </Route>
            <Route exact path="/poems">
                <Poems/>
            </Route>
            <Route exact path="/interactivity">
                <Interactivity/>
            </Route>
            <Route exact path="/featured">
                <Featured/>
            </Route>
            <Route path="*">
                <Error/>
            </Route>
          </Switch>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
