/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectQuestion = () =>
  createSelector(
    selectHome,
    homeState => homeState.question,
  );

export { selectHome, makeSelectQuestion };
