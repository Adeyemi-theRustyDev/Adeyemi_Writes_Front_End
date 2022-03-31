import Navbar from './Navbar';
import Home from'./Home';
import Footer from './Footer';
import Interactivity from './Interactivity';
import Library from './library';
import Error from './Error';
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
            <Route exact path="/library">
                <Library/>
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
