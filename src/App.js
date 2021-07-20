import Navigation from "./components/navbar/Navbar"
import Sidebar from "./components/sidebar/Sidebar"
import Home from "./pages/home/Home"
import UserList from "./pages/userlist/UserList";
import User from "./pages/user/User"
import NewUser from "./pages/newuser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product"
import NewProduct from "./pages/newproduct/NewProduct";
import Analytics from "./pages/analytics/Analytics";


import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom";

import "./App.css"

function App() {
  return (
    <Router>
      <Navigation />
      <div className="container">
      <Sidebar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/users">
          <UserList />
        </Route>
        <Route path="/user/:id">
          <User />
        </Route>
        <Route path="/newuser">
          <NewUser />
        </Route>
        <Route path="/products">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/newproduct">
          <NewProduct />
        </Route>
        <Route path="/analytics">
          <Analytics />
        </Route>
      </Switch>
      
      </div>
      
    </Router>
  );
}

export default App;
