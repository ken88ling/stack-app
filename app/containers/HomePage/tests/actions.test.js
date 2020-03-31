import { CHANGE_QUESTION } from '../constants';

import { changeQuestion } from '../actions';

describe('Home Actions', () => {
  describe('changeUsername', () => {
    it('should return the correct type and the passed name', () => {
      const fixture = 'mxstbr';
      const expectedResult = {
        type: CHANGE_QUESTION,
        username: fixture,
      };

      expect(changeQuestion(fixture)).toEqual(expectedResult);
    });
  });
});
