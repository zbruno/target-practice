import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import actions from '../actions/_index';

class TimelineApp extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

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
  bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TimelineApp);
