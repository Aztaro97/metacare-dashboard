import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {GlobalStyle} from "./globalSyles";
import Layout from "../components/layout";
import Dashboard from "../components/pages/dashboard";
import "antd/dist/antd.css";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Layout>
        <Switch>
          <Route path="/" component={Dashboard} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
