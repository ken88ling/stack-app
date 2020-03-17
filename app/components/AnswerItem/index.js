import React from 'react';
import PropTypes from 'prop-types';

function AnswerItem({
  item: {
    view_count,
    title,
    tags,
    score,
    answer_count,
    creation_date,
    link,
    owner,
  },
}) {
  const ConvertToDate = unixTimestamp => {
    const date = new Date(unixTimestamp * 1000);
    return `${date.getDate()} - ${date.getMonth() + 1} - ${date.getFullYear()}`;
  };

  return (
    <div className="answer-container">
      <div className="answer-container__item">
        <a href={link}>{title}</a>
      </div>

      <div>tags</div>
      <div>
        {tags.map((tag, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index}>{tag}</div>
        ))}
      </div>
      {/* eslint-disable-next-line camelcase */}
      <div className="answer-container__item">View Count = {view_count}</div>
      <div>Vote {score}</div>
      <div>Answer {answer_count}</div>

      <div>Create Date = {ConvertToDate(creation_date)}</div>
      <div>Creator Name</div>
      <div>{owner.display_name}</div>
      <img src={owner.profile_image} alt="profile" height="30px" width="30px" />
      <br />
    </div>
  );
}

AnswerItem.propTypes = {
  item: PropTypes.any,
};

export default AnswerItem;
