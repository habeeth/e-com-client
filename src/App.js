import logo from "./logo.svg";
import "./App.css";
import Layout from './components/Layouts/Index';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from "./containers/Signup";
import Signin from "./containers/Signin";
import Home from "./containers/Home";
import PrivateRoute from "./components/HOC/PrivateRoute";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories, getInitialData, isUserLoggedIn } from "./actions";
import Products from "./containers/Products/Index";
import Orders from "./containers/Orders/Index";
import Category from "./containers/Category/Index";

function App() {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn())
    }
    // dispatch(getAllCategories());//moving from categoty/Index to this file since the categories data should be available on Load of the application.
    dispatch(getInitialData());
  }, []);

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
          {/* <PrivateRoute path="/products" component={() => <p>products</p>} /> */}
          <PrivateRoute path="/products" component={Products} />
          <PrivateRoute path="/orders" component={Orders} />
          <PrivateRoute path="/category" component={Category} />

          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
