import {
  LOAD_ANSWER,
  LOAD_ANSWER_SUCCESS,
  LOAD_ANSWER_ERROR,
} from './constants';

/**
 * Load the answers, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_ANSWER
 */
export function loadAnswers() {
  return {
    type: LOAD_ANSWER,
  };
}

/**
 * Dispatched when the answers are loaded by the request saga
 *
 * @param  {array} repos The repository data
 * @param  {string} question The current question
 *
 * @return {object}      An action object with a type of LOAD_ANSWER_SUCCESS passing the repos
 */
export function answerLoaded(repos, question) {
  return {
    type: LOAD_ANSWER_SUCCESS,
    repos,
    question,
  };
}

/**
 * Dispatched when loading the answers fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_ANSWER_ERROR passing the error
 */
export function answerLoadingError(error) {
  return {
    type: LOAD_ANSWER_ERROR,
    error,
  };
}
