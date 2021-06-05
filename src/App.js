import logo from "./logo.svg";
import "./App.css";
import Layout from './components/Layouts/Index';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from "./containers/Signup";
import Signin from "./containers/Signin";
import Home from "./containers/Home";
import PrivateRoute from "./components/HOC/PrivateRoute";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload. yup
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className="App">
      <Router>
        <Switch>
          <PrivateRoute path="/" component={Home} exact />
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
