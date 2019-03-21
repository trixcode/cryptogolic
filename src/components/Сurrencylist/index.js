import React from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import styles from './styles'
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import Input from '@material-ui/core/Input';



const СurrencyListPage = props => {
  const { history } = props;
  const goToDetailCurrencyPage =()=>{
    history.push('./currency')
  }
  const currencys = [{
        id: 1,
        currency: 'bitcoin',
        price: '3040.50',
        change: '2.5',
        icon: 'https://static.coinpaprika.com/coin/btc-bitcoin/logo.png?rev=10557311'
    },{
        id: 2,
        currency: 'bitcoin',
        price: '3040.50',
        change: '2.5',
        icon: 'https://static.coinpaprika.com/coin/btc-bitcoin/logo.png?rev=10557311'
    },{
        id: 3,
        currency: 'bitcoin',
        price: '3040.50',
        change: '2.5',
        icon: 'https://static.coinpaprika.com/coin/btc-bitcoin/logo.png?rev=10557311'
    },{
        id: 4,
        currency: 'bitcoin',
        price: '3040.50',
        change: '2.5',
        icon: 'https://static.coinpaprika.com/coin/btc-bitcoin/logo.png?rev=10557311'
    },{
        id: 5,
        currency: 'bitcoin',
        price: '3040.50',
        change: '2.5',
        icon: 'https://static.coinpaprika.com/coin/btc-bitcoin/logo.png?rev=10557311'
    }]

  
  const { classes } = props;
    return (
      <List dense className={classes.root}>
      <div className={classes.pageTitle}>
      <h4>Top 100 Cryptocurrencies by Market Cap</h4>
        </div> 
        <FormControl className={classes.formControl}>
          <NativeSelect   defaultValue={10} 
                          input={<Input 
                          name="name" 
                          id="uncontrolled-native" />}>
            <option value={10}>usd</option>
            <option value={20}>kgz</option>
            <option value={30}>ruble</option>
          </NativeSelect>
        </FormControl>  
        <FormControl className={classes.formControl}>
          <NativeSelect   defaultValue={0} 
                          input={<Input 
                          name="name" 
                          id="uncontrolled-native" />}>
            <option value={0}>filters</option>
            <option value={10}>name</option>
            <option value={20}>date</option>
            <option value={30}>price</option>
          </NativeSelect>
        </FormControl>  
            <ListItem className={classes.listItem}>
              <ListItemText  className={classes.currency}>currency</ListItemText>
              <ListItemText>price</ListItemText>
              <ListItemText>change</ListItemText>
            </ListItem>
             {currencys.map(value => (
          <ListItem onClick={goToDetailCurrencyPage} className={classes.listItem} key={value.id} button>
            <ListItemAvatar >
              <Avatar
                alt={`${value.icon}`}
                src={`${value.icon}`}
              />
            </ListItemAvatar>
            <ListItemText primary={` ${value.currency}`} />
            <ListItemText primary={` ${value.price + '$'} `}/>
            <ListItemText primary={` ${value.change+ '%'} `}/>
          </ListItem>
        ))}
      </List>
    );
  }


СurrencyListPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(СurrencyListPage));