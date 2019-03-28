import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import styles from './styles'
import { fetchCurrenciesStart, fetchLiveStart, fetchConvertStart, fetchDataStart } from '../../store/main/actions';

class Header extends Component {
  state = {
    isDrawerOpen: false,
  }

  componentWillMount() {
    const { fetchCurrenciesStartAction, fetchLiveStartAction, fetchConvertStartAction, fetchDataStartAction } = this.props;
    fetchCurrenciesStartAction();
    fetchLiveStartAction();
    fetchConvertStartAction();
    fetchDataStartAction();
  }

  toggleDrawer = (open) => () => {
    this.setState({
      isDrawerOpen: open,
    });
  };

  onClickHeader = () => {
    const { history } = this.props
    history.push('/')
  }

  render() {
    const { classes, currencies, live, convert, data } = this.props
    console.log(currencies);
    console.log(live);
    console.log(convert);
    console.log(data);
    const sideList = (
      <div className={classes.list}>
        <List>
          {['Log in', 'Sign Up', 'Titles'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['About us', 'Contact us', 'Reclame'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    )

    const { isDrawerOpen } = this.state

    return (
      <Fragment>
        <AppBar position="static">
          <Toolbar className={classes.headerContainer}>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" color="inherit" onClick={this.onClickHeader}>
              Cryptogolic
            </Typography>
            <IconButton color="inherit">
              <SearchIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <SwipeableDrawer
          open={isDrawerOpen}
          onClose={this.toggleDrawer(false)}
          onOpen={this.toggleDrawer(true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
      </Fragment>
    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = store => ({
  currencies: store.currencies,
  live: store.live,
  convert: store.convert,
  data: store.data,
})

const mapDispatchToProps = dispatch => {
  return {
    fetchCurrenciesStartAction: () => dispatch(fetchCurrenciesStart()),
    fetchLiveStartAction: () => dispatch(fetchLiveStart()),
    fetchConvertStartAction: () => dispatch(fetchConvertStart()),
    fetchDataStartAction: () => dispatch(fetchDataStart())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withStyles(styles)(Header)));
