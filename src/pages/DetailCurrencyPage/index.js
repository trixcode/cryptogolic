import React, { Component, Fragment } from 'react';
import CurrencyStatistic from '../../components/DetailCurrency/CurrencyStatistic';
import CurrencyAbout from '../../components/DetailCurrency/CurrencyAbout';

class DetailCurrrencyPage extends Component{
  render(){
    return(
      <Fragment>
      <CurrencyStatistic/>
      <CurrencyAbout/>
      </Fragment>
    )
  }
}

export default DetailCurrrencyPage;