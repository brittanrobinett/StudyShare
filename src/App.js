import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css'; // remove if not used
import "bootstrap/dist/css/bootstrap.min.css";

import Dashboard from "./components/dashboard.component";
import Login from "./components/login.component";
import Register from "./components/register.component";
import Groups from "./components/group.component";

function App() {
  return (
    <Router>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/groups" component={Groups} />
    </Router>
  );
}

export default App;
