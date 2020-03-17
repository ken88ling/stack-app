import { selectHome, makeSelectQuestion } from '../selectors';

describe('selectHome', () => {
  it('should select the home state', () => {
    const homeState = {
      userData: {},
    };
    const mockedState = {
      home: homeState,
    };
    expect(selectHome(mockedState)).toEqual(homeState);
  });
});

describe('makeSelectUsername', () => {
  const usernameSelector = makeSelectQuestion();
  it('should select the username', () => {
    const question = 'php';
    const mockedState = {
      home: {
        question,
      },
    };
    expect(usernameSelector(mockedState)).toEqual(question);
  });
});
