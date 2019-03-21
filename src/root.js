import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import СurrencyListPage from './pages/СurrencyList/index'
import DetailCurrrencyPage from "./pages/DetailCurrencyPage";

function Users() {
  return <h2>Users</h2>;
}

function AppRouter() {
  return (
    <BrowserRouter>
        <Route path="/" exact component={СurrencyListPage} />
        <Route path="/currency/" component={DetailCurrrencyPage} />
        <Route path="/users/" component={Users} />
    </BrowserRouter>
  );
}

export default AppRouter;