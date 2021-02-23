import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home'
import Product from './Components/Products'
import About from './Components/About'
import ProductItem from './Components/ProductItem'
import Navbar from './Components/Navbar';
import HotSeller from "./Components/HotSeller";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, Redirect
} from "react-router-dom";

function App() {
  return (
    <div className="App">
            <Navbar/>
            <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route exact path="/product" component={Product} />
                    <Route path="/product/:id" component={ProductItem} />
                    <Route path="/hotseller" component={HotSeller} />
                    <Redirect to="/" />
            </Switch>
        
      
    </div>
  );
}

export default App;
