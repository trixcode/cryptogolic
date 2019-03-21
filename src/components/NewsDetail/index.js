import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import styles from './styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import KeyboardReturn from '@material-ui/icons/KeyboardReturn';


class NewsDetail extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (

      <Card className={classes.card}>

        <CardHeader
          title="Title"
          subheader="September 14, 2016"
          className={classes.title}>
        </CardHeader>
        <IconButton label="return" className={classes.button}>
          <KeyboardReturn fontSize="large" />
        </IconButton>
        <CardMedia
          className={classes.media}
          image="http://www.illuminea.com/wp-content/uploads/uploads/2009/02/500px-android-logosvg-300x300.png"
          title="Paella dish"
          subheaderTypographyProps="align: 'right'"
        />
        <CardContent>
          <Typography component="p" className={classes.text}>
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like. Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
              heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
              browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
              chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion,
              salt and pepper, and cook, stirring often until thickened and fragrant, about 10
              minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.     Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-highpeas along with the mussels, if you like. Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
              heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
              browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
              chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion,
              salt and pepper, and cook, stirring often until thickened and fragrant, about 10
              minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.     Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
              heat.
          </Typography>
          <Typography className={classes.titleOfAnotherNews}>Most interested news of month</Typography>
          <List component="nav" className={classes.root}>
            <ListItem button>
              <ListItemText className={classes.textOfAnotherNews} primary="News News News News" />
            </ListItem>
            <Divider />
            <ListItem button divider>
              <ListItemText className={classes.textOfAnotherNews} primary="News News News News" />
            </ListItem>
            <ListItem button>
              <ListItemText className={classes.textOfAnotherNews} primary="News News News News" />
            </ListItem>
            <Divider light />
            <ListItem button>
              <ListItemText className={classes.textOfAnotherNews} primary="News News News News" />
            </ListItem>
            <ListItem button>
              <ListItemText className={classes.textOfAnotherNews} primary="News News News News" />
            </ListItem>
          </List>
        </CardContent>

      </Card>
    );
  }
}

NewsDetail.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewsDetail);