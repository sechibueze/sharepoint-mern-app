import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
const Alert = ({ alerts }) => {
  
  return (
    <Fragment>     
      {
        alerts.map(alert => <div key={alert.id} className={`alert alert-${ alert.type }`}>{alert.text}</div>)
      }
    </Fragment>
  );
}

Alert.propTypes = {
  alerts: PropTypes.array
}
const mapStateToProps = state => ({
  alerts: state.alert.messages
});
export default connect(mapStateToProps)(Alert);