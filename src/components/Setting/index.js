import React, { PureComponent, Fragment } from "react";
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import IntegrationReactSelect from '../ReactSelectHelper';
import styles from './styles';

class Settings extends PureComponent {
  
  render() {
    const { currencies } = this.props;
    const suggestions = Object.keys(currencies).map(key => ({
      value: currencies[key].symbol,
      label: currencies[key].name,
    }));
    return (
      <Fragment>
        <h2>Primary currensly </h2>
        <IntegrationReactSelect suggestions={suggestions} />
      </Fragment>
    )
  }
}
Settings.propTypes = {
  currencies: PropTypes.object.isRequired,
};

const mapStateToProps = store => ({
  currencies: store.currencies,
})

export default connect(mapStateToProps, null)(withRouter(withStyles(styles)(Settings)));