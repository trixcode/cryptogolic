import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
};

function News(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea className={classes.cardContainer}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className={classes.media}
          height="140"
          image="https://upload.wikimedia.org/wikipedia/commons/1/1b/Square_200x200.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography className={classes.tag} component="h4">
            Tag
          </Typography>
          <Typography component="p">
            TitleTitleTitleTitleTitleTitle
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className={classes.media}
          height="140"
          image="https://upload.wikimedia.org/wikipedia/commons/1/1b/Square_200x200.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography className={classes.tag} component="h4">
            Tag
          </Typography>
          <Typography component="p">
            TitleTitleTitleTitleTitleTitle
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className={classes.media}
          height="140"
          image="https://upload.wikimedia.org/wikipedia/commons/1/1b/Square_200x200.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography className={classes.tag} component="h4">
            Tag
          </Typography>
          <Typography component="p">
          TitleTitleTitleTitleTitleTitle
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className={classes.media}
          height="140"
          image="https://upload.wikimedia.org/wikipedia/commons/1/1b/Square_200x200.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography className={classes.tag} component="h4">
            Tag
          </Typography>
          <Typography component="p">
          TitleTitleTitleTitleTitleTitle
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className={classes.media}
          height="140"
          image="https://upload.wikimedia.org/wikipedia/commons/1/1b/Square_200x200.png "
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography className={classes.tag} component="h4">
            Tag
          </Typography>
          <Typography component="p">
          TitleTitleTitleTitleTitleTitle
          </Typography>
        </CardContent>                                                                    
      </CardActionArea> */}
    </Card>
    
  );
}

News.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(News);