import React, { Component } from 'react';
import { withRouter }  from 'react-router';
import Card from '@material-ui/core/Card';
import  withStyles  from '@material-ui/core/styles/withStyles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styles from './styles';


class CurrencyAbout extends Component {
  goToNewsPage = () => {
    const { history } = this.props;
    history.push('/newsdetail');
  }
  render(){
  const { classes} = this.props;
    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            className={classes.media}
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Bitcoin
            </Typography>
            <Typography component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="medium" color="primary" onClick={this.goToNewsPage}>
            Official Website
          </Button>
        </CardActions>
      </Card>
    );
  }
}

  export default withRouter(withStyles(styles)(CurrencyAbout));