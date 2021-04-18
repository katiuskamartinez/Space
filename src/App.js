import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar } from "react-bootstrap";
import Astronautas from "./components/Astronautas";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import Event from "./components/Event";
import "./App.css";

function App() {
  return (
    <>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>
          <NavLink to="/" className="link">
            Space
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Item>
              <NavLink to="/" className="link">
                Astronauts
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/Event" className="link">
                Event
              </NavLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Jumbotron />
      <Switch>
        <Route exact path="/">
          <Astronautas />
        </Route>
        <Route exact path="/Event">
          <Event />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
