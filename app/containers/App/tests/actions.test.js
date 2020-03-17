import {
  LOAD_ANSWER_ERROR,
  LOAD_ANSWER_SUCCESS,
  LOAD_ANSWER,
} from '../constants';

import { loadAnswers, answerLoaded, answerLoadingError } from '../actions';

describe('App Actions', () => {
  describe('loadRepos', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOAD_ANSWER,
      };

      expect(loadAnswers()).toEqual(expectedResult);
    });
  });

  describe('reposLoaded', () => {
    it('should return the correct type and the passed repos', () => {
      const fixture = ['Test'];
      const username = 'test';
      const expectedResult = {
        type: LOAD_ANSWER_SUCCESS,
        repos: fixture,
        username,
      };

      expect(answerLoaded(fixture, username)).toEqual(expectedResult);
    });
  });

  describe('repoLoadingError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: LOAD_ANSWER_ERROR,
        error: fixture,
      };

      expect(answerLoadingError(fixture)).toEqual(expectedResult);
    });
  });
});
