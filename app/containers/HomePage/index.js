import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectAnswer,
  makeSelectLoading,
  makeSelectError,
} from '../App/selectors';
import AnswerList from '../../components/AnswerList';
import AtPrefix from './AtPrefix';
import Form from './Form';
import CenteredSection from './CenteredSection';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import { loadAnswers } from '../App/actions';
import { changeQuestion } from './actions';
import { makeSelectQuestion } from './selectors';
import reducer from './reducer';
import saga from './saga';

const key = 'home';

export function HomePage({
  question,
  loading,
  error,
  answers,
  onSubmitForm,
  onChangeQuestion,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    if (question && question.trim().length > 0) onSubmitForm();
  }, []);

  const answerListProps = {
    loading,
    error,
    answers,
  };

  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="homepage" />
      </Helmet>
      <div>
        <CenteredSection>
          <FormattedMessage {...messages.startProjectHeader} />
        </CenteredSection>
        <Section>
          <Form onSubmit={onSubmitForm}>
            <label htmlFor="question">
              <FormattedMessage {...messages.trymeMessage} />
              <AtPrefix>
                <FormattedMessage {...messages.trymeAtPrefix} />
              </AtPrefix>
              <Input
                id="question"
                type="text"
                placeholder="php"
                value={question}
                onChange={onChangeQuestion}
              />
            </label>
          </Form>
          <AnswerList {...answerListProps} />
        </Section>
      </div>
    </article>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  answers: PropTypes.any,
  onSubmitForm: PropTypes.func,
  question: PropTypes.string,
  onChangeQuestion: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  answers: makeSelectAnswer(),
  question: makeSelectQuestion(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeQuestion: evt => dispatch(changeQuestion(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadAnswers());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
