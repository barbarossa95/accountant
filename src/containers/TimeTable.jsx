import { connect } from 'react-redux';

import { getSortedOperations } from '../store/selectors';

import { fetchOperations } from '../store/actions/operations';

import TimeTable from '../components/TimeTable';

const mapStateToProps = state => ({
  operations: getSortedOperations(state),
  filters: state.filters,
});

const mapDispatchToProps = {
  fetchOperations,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeTable);
