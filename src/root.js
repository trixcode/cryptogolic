import React from "react";
import { BrowserRouter as Router, Route,  } from "react-router-dom";
import СurrencyListPage from './pages/СurrencyList/index'

// function Index() {
//   return <h2>Home</h2>;
// }

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function AppRouter() {
  return (
    <Router>
      
        <Route path="/" exact component={СurrencyListPage} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
    
    </Router>
  );
}

export default AppRouter;