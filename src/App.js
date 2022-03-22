import Navbar from './Navbar';
import Home from'./Home';
import Footer from './Footer';
import Interactivity from './Interactivity';
import Create from './Create';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Library from './library';



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
            <Route exact path="/create">
              <Create/>
            </Route>
          </Switch>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
