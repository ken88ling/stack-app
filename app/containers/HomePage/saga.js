import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_ANSWER } from 'containers/App/constants';

import request from 'utils/request';
import { makeSelectQuestion } from 'containers/HomePage/selectors';
import { answerLoaded, answerLoadingError } from '../App/actions';

export function* getAnswer() {
  const question = yield select(makeSelectQuestion());
  const requestURL = `https://api.stackexchange.com/2.2/search/advanced?accepted=True&order=desc&sort=creation&site=stackoverflow&title=${question}`;

  try {
    const repos = yield call(request, requestURL);
    yield put(answerLoaded(repos, question));
  } catch (err) {
    yield put(answerLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* stackData() {
  // Watches for LOAD_ANSWER actions and calls getAnswer when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_ANSWER, getAnswer);
}
