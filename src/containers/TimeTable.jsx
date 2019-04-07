import { connect } from 'react-redux';

import { getGroupedOperations } from '../store/selectors';

import TimeTable from '../components/TimeTable';

const mapStateToProps = state => ({
  operations: getGroupedOperations(state),
  filters: state.filters,
});

export default connect(
  mapStateToProps,
  null
)(TimeTable);
