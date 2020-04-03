import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';
import { makeSelectAnswer } from '../App/selectors';

const Container = styled.div`
  border: 1px solid red;
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  font-size: 14px;
  line-height: 19px;
  color: #0d4ea2;
  padding: 90px 30px 30px;
`;

export function DetailsPage({ match, answers }) {
  const { id } = match.params;
  // eslint-disable-next-line eqeqeq
  const result = answers.items.filter(q => q.question_id == id);
  return (
    <div>
      <Helmet>
        <title>DetailsPage</title>
        <meta name="description" content="Description of DetailsPage" />
      </Helmet>
      <Container>
        <pre style={{ overflow: 'auto' }}>
          {result && (
            <div
              className="answer__content__answer-count__body__details"
              dangerouslySetInnerHTML={{ __html: result[0].body }}
            />
          )}
        </pre>
      </Container>
    </div>
  );
}

DetailsPage.propTypes = {
  answers: PropTypes.any,
  match: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  answers: makeSelectAnswer(),
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
