import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class TimelineApp extends React.Component {
  render() {
    const { user } = this.props;

    return (
      <div className='AppContainer'></div>
    );
  }
}

TimelineApp.propTypes = {
  user: React.PropTypes.object,
};

function mapStateToProps(state) {
  return state;
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(null, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TimelineApp);
