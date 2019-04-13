import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid'
import Setting from '../../components/Setting';
import Header from '../../components/Header'

class SettingPage extends Component {
  render() {
    return (
      <Grid>
        <Header/>
        <Setting />
      </Grid>
    )
  }
}

export default SettingPage;