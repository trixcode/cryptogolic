import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NewsDetailPage from './pages/NewsDetailPage';
import NewsPage from './pages/NewsPage';
import СurrencyListPage from './pages/СurrencyList/index'
import DetailCurrrencyPage from "./pages/DetailCurrencyPage";

function AppRouter() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={СurrencyListPage} />
      <Route path="/currency/" component={DetailCurrrencyPage} />
      <Route path="/newsdetail/" exact component={NewsDetailPage} />
      <Route path="/news/" component={NewsPage} />
    </BrowserRouter>
  );
}

export default AppRouter;