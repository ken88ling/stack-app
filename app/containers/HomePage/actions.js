import { CHANGE_QUESTION } from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {string} question The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_QUESTION
 */
export function changeQuestion(question) {
  return {
    type: CHANGE_QUESTION,
    question,
  };
}
