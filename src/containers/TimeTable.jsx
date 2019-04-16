import { connect } from 'react-redux';

import { getSortedOperations } from '../store/selectors';

import { fetchOperations, removeOperation } from '../store/actions/operations';

import TimeTable from '../components/TimeTable';

const mapStateToProps = state => ({
  operations: getSortedOperations(state),
  filters: state.filters,
});

const mapDispatchToProps = {
  fetchOperations,
  removeOperation,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeTable);
