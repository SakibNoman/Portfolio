
import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import './App.css';
import About from "./Components/Home/About/About";
import Blogs from "./Components/Home/Blogs/Blogs";
import Contact from "./Components/Home/Contact/Contact";
import Home from './Components/Home/Home/Home';
import Portfolios from "./Components/Home/Portfolios/Portfolios";
import TopNav from "./Components/Shared/TopNav/TopNav";
import Icon from "./Icon";

function App() {
  return (
    <Router>
      <ScrollToTop smooth component={<Icon />} />
      <Switch>
        <Route exact path="/" >
          <Home></Home>
        </Route>
        <Route path="/home" >
          <Home></Home>
        </Route>
        <Route path="/about" >
          <TopNav></TopNav>
          <About></About>
        </Route>
        <Route path="/portfolio">
          <TopNav></TopNav>
          <Portfolios></Portfolios>
        </Route>
        <Route path="/contact/:isContact" >
          <TopNav></TopNav>
          <Contact></Contact>
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
