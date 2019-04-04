import React from 'react';
import { withRouter } from "react-router";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


function News(props) {
  const { classes, history } = props;

  const onClickNewsDetail = () => {
    history.push('/newsdetail/')
  }
  return (
    <Card className={classes.card} onClick={onClickNewsDetail}>
      <CardActionArea>
        <CardMedia 
          component="img"
          className={classes.media}
          height="140"
          image="https://upload.wikimedia.org/wikipedia/commons/1/1b/Square_200x200.png "
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography className={classes.titleOfCard} component="p">
            This Short Animation Might Make You Think Twice About Taxes
          </Typography>
          <Typography className={classes.shortDesc} component="p">
            This Short Animation Might Make You Think Twice About Taxes
          This Short Animation Might Make You Think Twice About Taxes
          </Typography>
          <div className={classes.daysAndComments}>
            <Typography className={classes.date} component="p">
              News | 5 day ago
          </Typography>
            <Typography className={classes.likesOfNews}>
              Comments
          </Typography>
          </div>

        </CardContent>
      </CardActionArea>
    </Card>

  );
}

News.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(News));