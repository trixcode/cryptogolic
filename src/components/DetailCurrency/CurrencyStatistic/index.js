import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import styles from './styles';
import statisticExample from '../../../assets/img/statisticExample.jpg';


function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}
TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

class CurrencyStatistic extends Component {
  state = {
    value: 0
  };
   handleChange = (event, value) => {
    this.setState({ value });
  };
  render() {
    const { classes } = this.props;
    const { value } = this.state;
    console.log(statisticExample);
    return (
      <Card className={classes.card}>
      <div className={classes.block}>
        <CardHeader className={classes.header}
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          title="Bitcoin Price"
        />
        <div className={classes.priceBlock}>
          <span className={classes.price}>$1000.1</span>
          <span className={classes.pricePercent}>-1.21%</span>
        </div>
        </div>
        <div className={classes.root}>
        <div className={classes.tabBlock}>
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="24h" />
            <Tab label="1months" />
            <Tab label="1year" />
            <Tab label="All" />
          </Tabs>
        </div>
        {value === 0 && <TabContainer>
        <h4>Market Cap</h4>
        <p>$10.0B</p>
        <h4>Volume</h4>
        <p>$3.9B</p>
        <h4>Circulating Supply</h4>
        <p>$2.6M BTC</p>
        <h4>All time High</h4>
        <p>$1.8K</p>
        </TabContainer>}
        {value === 1 && <TabContainer>
        <h4>Market Cap</h4>
        <p>$31.0B</p>
        <h4>Volume</h4>
        <p>$2.9B</p>
        <h4>Circulating Supply</h4>
        <p>3.6M BTC</p>
        <h4>All time High</h4>
        <p>$3.8K</p>
        </TabContainer>}
        {value === 2 && <TabContainer>
        <h4>Market Cap</h4>
        <p>$54.0B</p>
        <h4>Volume</h4>
        <p>$4.9B</p>
        <h4>Circulating Supply</h4>
        <p>5.6M BTC</p>
        <h4>All time High</h4>
        <p>$10.8K</p>
        </TabContainer>}
        {value === 3 && <TabContainer>
        <h4>Market Cap</h4>
        <p>$71.0B</p>
        <h4>Volume</h4>
        <p>$9.9B</p>
        <h4>Circulating Supply</h4>
        <p>17.6M BTC</p>
        <h4>All time High</h4>
        <p>$16.8K</p>
        </TabContainer>}
      </div>
      </Card>
    )
  }
  
}


export default withStyles(styles)(CurrencyStatistic);