import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid'
import Settings from '../../components/Settings';
import Header from '../../components/Header'

class SettingsPage extends Component {
  render() {
    return (
      <Grid>
        <Header/>
        <Settings />
      </Grid>
    )
  }
}

export default SettingsPage;