import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes, { string } from 'prop-types';
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
import {fetchCurrenciesStart} from '../../store/main/actions';

class Header extends Component {
  state = {
    isDrawerOpen: false,
    isSearchClicked: false,
  }

  componentWillMount() {
    const { fetchCurrenciesStartAction } = this.props;
    fetchCurrenciesStartAction();
  }
  toggleDrawer = (open) => () => {
    this.setState({
      isDrawerOpen: open,
    });
  };

  onClickHeader = () => {
    const { history } = this.props
    history.push('/');
    this.setState({
      isSearchClicked: false,
    })
  }

  onClickOutside = () => {
     this.setState({
      isSearchClicked: false,
    })
  }

  onClickSearch = () => {
    this.setState({
      isSearchClicked: true,
    })
  }

  onTypeSearch = (event) => {
    const inputValue = event.target.value
  }

  burgerMenu = (text) => {
    const { history } = this.props
    const link = text.replace(/\s/g, '')
    history.push(link);
  }
  
  render() {
    const { classes, currencies } = this.props
    console.log(currencies)
    
    const sideList = (
      <div className={classes.list}>
        <List>
          {['Log in', 'Sign Up', 'News', 'About us', 'Contact us', 'Reclame' ].map((text, index) => (
            <Fragment>
            <ListItem key={text} onClick={() => this.burgerMenu(text)}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
            <Divider /></Fragment>
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

            {
            !this.state.isSearchClicked ? (
            <IconButton color="inherit" onClick={this.onClickSearch}>
              <SearchIcon />
            </IconButton>
            ) : (
            <div className={classes.searchDiv} onBlur={this.onClickOutside}>
              <input type="text" placeholder="search" onChange={this.onTypeSearch} className={classes.searchInput}></input>
            </div>)
            }
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
  live: store.live
})

const mapDispatchToProps = dispatch => {
  return {
    fetchCurrenciesStartAction: () => dispatch(fetchCurrenciesStart())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withStyles(styles)(Header)));
