import produce from 'immer';
import {
  LOAD_ANSWER_SUCCESS,
  LOAD_ANSWER,
  LOAD_ANSWER_ERROR,
} from './constants';

export const initialState = {
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    answers: false,
  },
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_ANSWER:
        draft.loading = true;
        draft.error = false;
        draft.userData.answers = false;
        break;

      case LOAD_ANSWER_SUCCESS:
        draft.userData.answers = action.questions;
        draft.loading = false;
        draft.currentUser = action.question;
        break;

      case LOAD_ANSWER_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default appReducer;
