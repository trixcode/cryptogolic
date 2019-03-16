import React, { Component } from 'react';
import  withStyles  from '@material-ui/core/styles/withStyles';
import styles from './styles'

class CurrencyStatistic extends Component{
  render(){
    const {classes} = this.props;
    return(
      <div>
        <div>
          <div>
            <img/>
            <span>coinsName</span>
            <a>buyNow</a>
          </div>
          <div>
            <h3 className={classes.price}>price</h3>
          </div>
          <div>
            <img/>
            <span>Statistic</span>
          </div>
          <div>
            <div>
              <button>12h</button>
              <button>24h</button>
              <button>1week</button>
              <button>1month</button>
              <button>1year</button>
              <button>All</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(CurrencyStatistic);