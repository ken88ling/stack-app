import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_ANSWER } from '../App/constants';
import request from '../../utils/request';
import { makeSelectQuestion, makeSelectAnswerId } from './selectors';
import { answerLoaded, answerLoadingError } from '../App/actions';

// search question return list questions
export function* getAnswer() {
  const question = yield select(makeSelectQuestion());
  const requestURL = `https://api.stackexchange.com/2.2/search/advanced?accepted=True&order=desc&sort=creation&site=stackoverflow&title=${question}&&filter=!b1MME4lS1P-_z5`;

  try {
    const ques = yield call(request, requestURL);
    yield put(answerLoaded(ques, question));
  } catch (err) {
    yield put(answerLoadingError(err));
  }
}

// answer with body
// https://api.stackexchange.com/2.2/questions/22876978?order=desc&sort=activity&site=stackoverflow&filter=!b1MME4lS1P-_z5
export function* getAnswerById() {
  const questionId = yield select(makeSelectAnswerId());
  console.log('function*getAnswerById -> questionId', questionId);
  const requestURL = `https://api.stackexchange.com/2.2/questions/${questionId}?order=desc&sort=activity&site=stackoverflow&&filter=!b1MME4lS1P-_z5`;

  try {
    const question = yield call(request, requestURL);
    console.log('function*getAnswerById -> question', question);
    yield put(answerLoaded(question, questionId));
  } catch (err) {
    yield put(answerLoadingError(err));
  }
}

export default function* stackData() {
  yield takeLatest(LOAD_ANSWER, getAnswer);
}

export function* getQuestionData() {
  yield takeLatest(LOAD_ANSWER, getAnswerById);
}

export function* getAnswerData() {
  yield takeLatest(LOAD_ANSWER, getAnswerById);
}
