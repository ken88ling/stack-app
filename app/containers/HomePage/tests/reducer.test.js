import produce from 'immer';

import homeReducer from '../reducer';
import { changeQuestion } from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('homeReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      answerId: '',
      question: '',
      questionId: '',
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(homeReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the changeUsername action correctly', () => {
    const fixture = 'ken';
    const expectedResult = produce(state, draft => {
      draft.username = fixture;
    });

    expect(homeReducer(state, changeQuestion(fixture))).toEqual(expectedResult);
  });
});
