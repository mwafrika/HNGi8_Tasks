import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import { Layout } from "antd";
import { Row, Col, Divider } from "antd";
import "./index.css";
import About from "./component/About";
import Portfolio from "./component/Portofolio";
import Home from "./component/Home";
import Contact from "./component/Contact";
import Navbar from "./component/Navbar";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </React.Fragment>
  );
}

export default App;
