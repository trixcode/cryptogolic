import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import DetailCurrrencyPage from "./pages/DetailCurrencyPage";
import Header from "./components/Header";
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
        <Route path="/currency/" component={DetailCurrrencyPage} />
        <Route path="/users/" component={Users} />
    </BrowserRouter>
  );
}

export default AppRouter;