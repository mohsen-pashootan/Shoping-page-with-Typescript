import React, { useEffect } from "react";
import { getInitData } from "./stateManager/actions";
import { useDispatch } from "react-redux";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  // Redirect,
} from "react-router-dom";
import Shop from "./component/shop";
import ProductDetail from "./component/productDetail";
import Layout from "./sharedComponent/layout";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInitData());
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Layout>
          <Route path="/productDetail/:id" component={ProductDetail}></Route>
          <Route path="/shop" component={Shop}></Route>
          {/* <Redirect from="/" exact to="/shop" /> */}
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
