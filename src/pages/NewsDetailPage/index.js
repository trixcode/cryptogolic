import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Header from '../../components/Header';
import NewsDetail from '../../components/NewsDetail';

class NewsDetailPage extends Component {
  render() {
    return (
      <Grid>
        <Header />
        <NewsDetail />
      </Grid>
    )
  }
}

export default NewsDetailPage;