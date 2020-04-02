import { selectedQuestion } from '../actions';
import { SELECTED_QUESTION } from '../constants';

describe('DetailsPage actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: selectedQuestion,
      };
      expect(SELECTED_QUESTION()).toEqual(expected);
    });
  });
});
