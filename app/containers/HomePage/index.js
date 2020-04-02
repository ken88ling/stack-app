import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from '../../utils/injectReducer';
import { useInjectSaga } from '../../utils/injectSaga';
import {
  makeSelectAnswer,
  makeSelectLoading,
  makeSelectError,
} from '../App/selectors';
import AnswerList from '../../components/AnswerList';
import Form from './Form';
import Input from './Input';
import { loadAnswers } from '../App/actions';
import { changeQuestion } from './actions';
import { makeSelectQuestion } from './selectors';
import reducer from './reducer';
import saga from './saga';
import './home.scss';

export function HomePage({
  question,
  loading,
  error,
  answers,
  onSubmitForm,
  onChangeQuestion,
}) {
  useInjectReducer({ key: 'home', reducer });
  useInjectSaga({ key: 'home', saga });

  useEffect(() => {
    if (question && question.trim().length > 0) onSubmitForm();
  }, []);

  const answerListProps = {
    loading,
    error,
    answers,
  };

  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="homepage" />
      </Helmet>
      <div className="home">
        <Form onSubmit={onSubmitForm}>
          <div className="home__header">Search Result</div>
          <div className="home__search">
            <Input
              id="question"
              type="text"
              placeholder="example type php then press Enter"
              value={question}
              onChange={onChangeQuestion}
            />
          </div>
        </Form>
        <AnswerList {...answerListProps} />
      </div>
    </>
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
