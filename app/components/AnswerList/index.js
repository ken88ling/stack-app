import React from 'react';
import PropTypes from 'prop-types';
import List from '../List';
import LoadingIndicator from '../LoadingIndicator';
import AnswerItem from '../AnswerItem';

function AnswerList({ loading, error, answers }) {
  const { items } = answers;
  if (loading) {
    return <List component={LoadingIndicator} />;
  }
  if (error !== false) {
    console.log('error !!!');
  }

  if (answers !== false) {
    console.log('answer != false => ', items);
    return items.slice(0, 10).map(item => <AnswerItem item={item} />);
  }
  return <></>;
}

AnswerList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  answers: PropTypes.any,
};

export default AnswerList;
