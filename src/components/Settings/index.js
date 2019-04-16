import React, { PureComponent, Fragment } from "react";
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import IntegrationReactSelect from '../ReactSelectHelper';
import styles from './styles';
import { setPrimaryCurrency } from '../../store/main/actions';
class Settings extends PureComponent {

  componentWillMount() {
    const {setPrimaryCurrencyAction} = this.props
    const primaryCurrency = JSON.parse(localStorage.getItem('primaryCurreny'));
    if (primaryCurrency) {
      setPrimaryCurrencyAction(primaryCurrency)
    }
  }

  onPrimaryCurrency = primaryCurrencyValue => {
    const {setPrimaryCurrencyAction} = this.props
    setPrimaryCurrencyAction(primaryCurrencyValue)
    localStorage.setItem('primaryCurreny', JSON.stringify(primaryCurrencyValue))
  };
  
  render() {
    const { currencies, storePrimaryValue } = this.props;
    const suggestions = Object.keys(currencies).map(key => ({
      value: currencies[key].symbol,
      label: currencies[key].name,
    }));
    return (
      <Fragment>
        <h2>Primary currensly </h2>
        <IntegrationReactSelect 
          suggestions={suggestions} 
          onSelectChange = {this.onPrimaryCurrency}
          plaseholder="Select currency"
          value={storePrimaryValue}
          />
      </Fragment>

    )
  }
}

Settings.propTypes = {
  currencies: PropTypes.object.isRequired,
};

const mapStateToProps = store => ({
  currencies: store.currencies,
  storePrimaryValue: store.primaryCurrencyValue
})

const mapDispatchToProps = dispatch => {
  return {
    setPrimaryCurrencyAction: (primaryCurrencyValue) => dispatch(setPrimaryCurrency(primaryCurrencyValue)), 
  }
}

export default connect(mapStateToProps,  mapDispatchToProps)(withRouter(withStyles(styles)(Settings)));