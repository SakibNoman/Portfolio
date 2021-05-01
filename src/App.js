import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import './App.css';
import Blogs from "./Components/Home/Blogs/Blogs";
import Home from './Components/Home/Home/Home';
import Portfolios from "./Components/Home/Portfolios/Portfolios";
import TopNav from "./Components/Shared/TopNav/TopNav";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" >
          <Home></Home>
        </Route>
        <Route path="/home" >
          <Home></Home>
        </Route>
        <Route path="/about" >
          <TopNav></TopNav>
        </Route>
        <Route path="/portfolio" >
          <TopNav></TopNav>
          <Portfolios></Portfolios>
        </Route>
        <Route path="/contact" >
          <TopNav></TopNav>
        </Route>
        <Route path="/blogs" >
          <TopNav></TopNav>
          <Blogs></Blogs>
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
