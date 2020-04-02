import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectDetails = state => state.details || initialState;

const makeSelectQuestion = () =>
  createSelector(
    selectDetails,
    detailsState => detailsState.questionId,
  );

export { selectDetails, makeSelectQuestion };
