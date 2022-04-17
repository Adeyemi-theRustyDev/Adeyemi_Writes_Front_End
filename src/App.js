import Navbar from './components/Navbar';
import Home from'./pages/Home';
import Footer from './components/Footer';
import Interactivity from './pages/Interactivity';
import Error from './pages/Error';
import Create from './pages/Create';
import Library from './pages/Library';
import PoemsAdvanced from './pages/Poemadvanced';
import DetailedPoem from './pages/DetailedPoem';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
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
                <PoemsAdvanced/>
            </Route>
            <Route path="/poems/:id">
                <DetailedPoem/>
            </Route>
            <Route exact path="/interactivity">
                <Interactivity/>
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
