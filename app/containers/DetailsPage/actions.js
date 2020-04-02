/*
 *
 * DetailsPage actions
 *
 */

import { SELECTED_QUESTION } from './constants';

/**
 * selected id
 *
 * @param  {string} questionId selected  question id
 *
 * @return {object} An action object with a type of SELECTED_QUESTION

 */
export function selectedQuestion(questionId) {
  return {
    type: SELECTED_QUESTION,
    questionId,
  };
}
