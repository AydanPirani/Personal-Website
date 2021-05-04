import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import About from "./Screens/About.jsx"
import Contact from "./Screens/Contact.jsx"
import Docs from "./Screens/Docs.jsx"
import Home from "./Screens/Home.jsx"
import Experience from "./Screens/Experience.jsx"


function App() {
    return (
    <BrowserRouter>
      <Switch>
        {/* Unauthenticated Routes */}
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/docs" component={Docs} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/experience" component={Experience} />
      </Switch>
    </BrowserRouter>
    );
  }
  
  export default App;