import produce from 'immer';
import { SELECTED_QUESTION } from './constants';

export const initialState = {
  questionId: '1',
  answerId: '1',
};

/* eslint-disable default-case, no-param-reassign */
const detailsReducer = (state = initialState, action) =>
  // eslint-disable-next-line consistent-return
  produce(state, draft => {
    switch (action.type) {
      case SELECTED_QUESTION:
        draft.questionId = action.questionId;
        break;
      default:
        return state;
    }
  });

export default detailsReducer;
