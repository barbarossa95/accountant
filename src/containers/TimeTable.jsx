import { connect } from 'react-redux';

import { getSortedOperations } from '../store/selectors';

import TimeTable from '../components/TimeTable';

const mapStateToProps = state => ({
  operations: getSortedOperations(state),
  filters: state.filters,
});

export default connect(
  mapStateToProps,
  null
)(TimeTable);
