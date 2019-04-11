import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import styles from './styles'
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import Input from '@material-ui/core/Input';

const СurrencyListPage = props => {
  const { history, classes, currencies } = props;
  const goToDetailCurrencyPage = () => {
    history.push('./currency')
  }
  return (
    <List dense className={classes.root}>
      <h4 className={classes.currencyTitle}>Top 100 Cryptocurrencies by Market Cap</h4>
      <div className={classes.formContainer}>
        <FormControl className={classes.formControl}>
          <NativeSelect
            classes={{
              select: classes.selectItem,
            }}
            defaultValue={10}
            input={<Input
              name="name"
              id="uncontrolled-native" />}>
            <option value={10}>usd</option>
            <option value={20}>kgz</option>
            <option value={30}>ruble</option>
          </NativeSelect>
        </FormControl>
        <FormControl className={classes.formControl}>
          <NativeSelect
            classes={{
              select: classes.selectItem,
            }}
            defaultValue={0}
            input={<Input
              name="name"
              id="uncontrolled-native" />}>
            <option value={0}>filters</option>
            <option value={10}>name</option>
            <option value={20}>date</option>
            <option value={30}>price</option>
          </NativeSelect>
        </FormControl>
      </div>
      <ListSubheader className={classes.subHeaderTitle}>
        <ListItemText
          classes={{
            root: classes.listTitle,
            primary: classes.listTitleColor
          }}
          primary={'curenncy'} />
        <ListItemText
          classes={{
            root: classes.listTitle,
            primary: classes.listTitleColor
          }}
          primary={'price'} />
        <ListItemText
          classes={{
            root: classes.listTitle,
            primary: classes.listTitleColor
          }}
          primary={'change'} />
      </ListSubheader>
      {Object.keys(currencies).map(key => (
        <ListItem 
          onClick={goToDetailCurrencyPage} 
          className={classes.listItem} 
          key={key}>
          <ListItemAvatar >
            <Avatar
              alt={currencies[key].name}
              src={currencies[key].icon_url}
            />
          </ListItemAvatar>
          <ListItemText 
            primary={currencies[key].name} 
            className={classes.listItemText} 
          />
          <ListItemText 
            primary={currencies[key].rates + ' $'} 
            className={classes.listItemText} 
          />
          <ListItemText
            primary={currencies[key].change_pct + ' %'}
            classes={{
              root: classes.listItemText,
              primary: currencies[key].change_pct < 0 ? classes.redPct : classes.greenPct
            }}
          />
        </ListItem>
      ))}
    </List>
  );
}

СurrencyListPage.propTypes = {
  classes: PropTypes.object.isRequired,
  currencies: PropTypes.object.isRequired,
};

const mapStateToProps = store => ({
  currencies: store.currencies,
})

export default connect(mapStateToProps, null)(withRouter(withStyles(styles)(СurrencyListPage)));