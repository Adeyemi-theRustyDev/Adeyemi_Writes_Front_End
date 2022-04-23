import Navbar from './components/Navbar';
import Home from'./pages/Home';
import Footer from './components/Footer';
import Collabs from './pages/Collaborations';
import Error from './pages/Error';
import Create from './pages/Create';
import Library from './pages/Library';
import Poems from './pages/PoemsLibrary';
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
                <Poems/>
            </Route>
            <Route path="/poems/:id">
                <DetailedPoem/>
            </Route>
            <Route exact path="/collabs">
                <Collabs/>
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
