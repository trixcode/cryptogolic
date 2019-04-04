import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Header from '../../components/Header';
import CurrencyStatistic from '../../components/DetailCurrency/CurrencyStatistic';
import CurrencyAbout from '../../components/DetailCurrency/CurrencyAbout';

class DetailCurrrencyPage extends Component{
  render(){
    return(
      <Grid container>
        <Header />
        <CurrencyStatistic/>
        <CurrencyAbout/>
      </Grid>
    )
  }
}

export default DetailCurrrencyPage;