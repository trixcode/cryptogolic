/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import Grid from '@material-ui/core/Grid';

import Header from '../../components/Header';
import СurrencyList from '../../components/Сurrencylist';

const HomePage = () => {
  return (
    <Grid container>
      <Header />
      <СurrencyList title="dsdf\dasdasdff" />
    </Grid>
  )
}

export default HomePage;

