import { connect } from 'react-redux';

import TimeTable from '../components/TimeTable';

const mapStateToProps = state => ({ operations: state.operations.operations });

export default connect(
  mapStateToProps,
  null
)(TimeTable);
