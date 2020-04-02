import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectQuestion } from './selectors';
import reducer from './reducer';

export function DetailsPage({ questionId }) {
  useInjectReducer({ key: 'details', reducer });
  return (
    <div>
      <Helmet>
        <title>DetailsPage</title>
        <meta name="description" content="Description of DetailsPage" />
      </Helmet>
      <div>{questionId}</div>
      <div>{questionId}</div>
      <div>{questionId}</div>
      <div>{questionId}</div>
      <div>{questionId}</div>
      <div>{questionId}</div>
      <div>{questionId}</div>
      <div>{questionId}</div>
      <div>{questionId}</div>
      <div>{questionId}</div>
    </div>
  );
}

DetailsPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  questionId: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  questionId: makeSelectQuestion(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(DetailsPage);
