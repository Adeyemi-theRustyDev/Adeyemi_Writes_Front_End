import Navbar from './Navbar';
import Home from'./Home';
import Footer from './Footer';
import Interactivity from './Interactivity';
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
            <Route exact path="/interactivity">
                <Interactivity/>
            </Route>
          </Switch>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
