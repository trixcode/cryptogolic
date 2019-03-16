import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

// PAGES
import PagesNamePage from './pages/PagesName';

function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function AppRouter() {
  return (
    <BrowserRouter>
        <Route path="/" exact component={PagesNamePage} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
    </BrowserRouter>
  );
}

export default AppRouter;