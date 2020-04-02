import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectQuestion = () =>
  createSelector(
    selectHome,
    homeState => homeState.question,
  );

const makeSelectQuestionId = () =>
  createSelector(
    selectHome,
    homeState => homeState.questionId,
  );

const makeSelectAnswerId = () =>
  createSelector(
    selectHome,
    homeState => homeState.answerId,
  );

export {
  selectHome,
  makeSelectQuestion,
  makeSelectAnswerId,
  makeSelectQuestionId,
};
