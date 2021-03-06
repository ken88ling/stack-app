import produce from 'immer';
import { CHANGE_QUESTION } from './constants';

// The initial state of the App
export const initialState = {
  question: '',
  questionId: '1',
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  // eslint-disable-next-line consistent-return
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_QUESTION:
        draft.question = action.question;
        break;
      default:
        return state;
    }
  });

export default homeReducer;
