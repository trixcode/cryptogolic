import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import CurrencyStatistic from '../../components/DetailCurrency/CurrencyStatistic';
import CurrencyAbout from '../../components/DetailCurrency/CurrencyAbout';

class DetailCurrrencyPage extends Component{
  render(){
    return(
      <Grid container>
      <CurrencyStatistic/>
      <CurrencyAbout/>
      </Grid>
    )
  }
}

export default DetailCurrrencyPage;