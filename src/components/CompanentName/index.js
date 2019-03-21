import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import styles from './styles';


const ComponetNameTest = (props) => {
    const { title, classes } = props;
    return (
        <div className={classes.title}>{title}</div>
    )
}

export default withStyles(styles)(ComponetNameTest);
