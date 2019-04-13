import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NewsDetailPage from './pages/NewsDetailPage';
import NewsPage from './pages/NewsPage';
import DetailCurrrencyPage from "./pages/DetailCurrencyPage";
import SettingsPage from "./pages/SettingsPage"

function AppRouter() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomePage} />
      <Route path="/currency/" component={DetailCurrrencyPage} />
      <Route path="/newsdetail/" exact component={NewsDetailPage} />
      <Route path="/news/" component={NewsPage} />
      <Route path="/settings/" component={SettingsPage}/>
    </BrowserRouter>
  );
}

export default AppRouter;