import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Header from '../../components/Header';
import News from '../../components/News';


class NewsPage extends Component {
  render() {
    return (
      <Grid>
        <Header />
        <News />
      </Grid>
    )
  }
}

export default NewsPage;