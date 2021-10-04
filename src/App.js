import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Components/About/About";
import Header from "./Components/Header/Header";
import Help from "./Components/Help/Help";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import Service from "./Components/Service/Service";
import Support from "./Components/Support/Support";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      {/* 2 site fixed haeader and every site switch */}
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/service">
            <Service></Service>
          </Route>
          <Route exact path="/support">
            <Support></Support>
          </Route>
          <Route exact path="/help">
            <Help></Help>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
