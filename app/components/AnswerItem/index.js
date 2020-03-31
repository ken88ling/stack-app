import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './AnswerItem.scss';
import cx from 'classnames';

function AnswerItem({
  item: { view_count, title, tags, score, creation_date, link, owner, body },
}) {
  const ConvertToDate = unixTimestamp => {
    const date = new Date(unixTimestamp * 1000);
    return `${date.getDate()} - ${date.getMonth() + 1} - ${date.getFullYear()}`;
  };

  const [hide, setHide] = useState(true);

  const handleClick = () => {
    console.log('click');
    setHide(!hide);
  };

  return (
    <div className="answer">
      <div className="answer__vote">
        <div className="answer__vote__hand">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 21.4763C15 21.4763 14.25 21.75 12 21.75C9.75 21.75 8.53125 21 7.5 20.25H4.5C3.70435 20.25 2.94129 19.9339 2.37868 19.3713C1.81607 18.8087 1.5 18.0456 1.5 17.25V15C1.5 14.2044 1.81607 13.4413 2.37868 12.8787C2.94129 12.3161 3.70435 12 4.5 12H5.90625C6.16381 11.9986 6.41677 11.9316 6.64124 11.8052C6.86572 11.6789 7.05431 11.4975 7.18922 11.2781C7.18922 11.2781 7.59375 10.3973 8.8125 8.28656C10.0312 6.17578 12.375 3 12.75 2.25C14.1094 2.25 14.7656 3.28125 14.3438 4.48641C13.8619 5.86406 13.2323 7.03547 13.0566 8.56875C13.0313 8.79281 13.2037 9.13125 13.4292 9.13125L19.5 9.60938"
              stroke="#A4A4A4"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.5 12.7031L15.75 12.6094C14.8125 12.5231 14.25 12.0281 14.25 11.2031C14.25 10.3781 14.9062 9.85125 15.75 9.79688L19.5 9.60938C20.325 9.60938 21 10.3781 21 11.2031V11.2111C20.9979 11.6075 20.8389 11.987 20.5579 12.2666C20.2768 12.5462 19.8964 12.7031 19.5 12.7031Z"
              stroke="#A4A4A4"
              strokeWidth="1.5"
              strokeMiterlimit="10"
            />
            <path
              d="M21 15.75L15.75 15.6562C14.9062 15.6169 14.25 15.0745 14.25 14.25C14.25 13.4245 14.9062 12.8972 15.75 12.8438L21 12.75C21.3974 12.7512 21.7783 12.9097 22.0593 13.1907C22.3403 13.4717 22.4988 13.8526 22.5 14.25V14.25C22.4988 14.6474 22.3403 15.0283 22.0593 15.3093C21.7783 15.5903 21.3974 15.7488 21 15.75V15.75Z"
              stroke="#A4A4A4"
              strokeWidth="1.5"
              strokeMiterlimit="10"
            />
            <path
              d="M18.75 21.75L15.75 21.6094C14.7656 21.5231 14.25 21.075 14.25 20.25C14.25 19.425 14.925 18.8438 15.75 18.8438L18.75 18.75C19.1475 18.7511 19.5284 18.9095 19.8094 19.1906C20.0905 19.4716 20.2489 19.8525 20.25 20.25V20.25C20.2489 20.6475 20.0905 21.0284 19.8094 21.3094C19.5284 21.5905 19.1475 21.7489 18.75 21.75V21.75Z"
              stroke="#A4A4A4"
              strokeWidth="1.5"
              strokeMiterlimit="10"
            />
            <path
              d="M20.25 18.75L15.75 18.6562C14.8594 18.6169 14.25 18.075 14.25 17.25C14.25 16.425 14.8594 15.8981 15.75 15.8438L20.25 15.75C20.6475 15.7511 21.0284 15.9095 21.3094 16.1906C21.5905 16.4716 21.7489 16.8525 21.75 17.25V17.25C21.7489 17.6475 21.5905 18.0284 21.3094 18.3094C21.0284 18.5905 20.6475 18.7489 20.25 18.75Z"
              stroke="#A4A4A4"
              strokeWidth="1.5"
              strokeMiterlimit="10"
            />
          </svg>
        </div>
        <div className="answer__vote__number">{score}</div>
      </div>
      <div className="answer__content">
        <div className="answer__content__title">
          <a href={link}>{title}</a>
        </div>

        <div className="answer__content__tags">
          tags :
          <div>
            {tags.map((tag, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <span key={index}>{tag}, </span>
            ))}
          </div>
        </div>
        <div className="answer__content__answer-count">
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <div
            className="answer__content__answer-count__title"
            onClick={handleClick}
          >
            Question Details...
          </div>
          <div
            className={cx('"answer__content__answer-count__body"', {
              isHide: hide,
            })}
          >
            <div
              className="answer__content__answer-count__body__details"
              dangerouslySetInnerHTML={{ __html: body }}
            />
          </div>
        </div>
      </div>
      <div className="answer__profile">
        <div className="answer__profile__create-date">
          asked on {ConvertToDate(creation_date)}
        </div>

        <div className="answer__profile__details">
          <div className="answer__profile__details__name">
            {owner.display_name}
          </div>
          <div className="answer__profile__details__img">
            <img
              src={owner.profile_image}
              alt="profile"
              height="32px"
              width="32px"
            />
          </div>
        </div>
        <div className="answer__view">
          <div className="answer__view__img">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.984 5.25C8.33061 5.25 4.58295 7.36453 1.63264 11.5936C1.54843 11.7156 1.50228 11.8599 1.50003 12.0082C1.49777 12.1564 1.53952 12.302 1.61998 12.4266C3.88686 15.975 7.58436 18.75 11.984 18.75C16.3359 18.75 20.1094 15.9666 22.3805 12.4102C22.459 12.2881 22.5008 12.1459 22.5008 12.0007C22.5008 11.8555 22.459 11.7134 22.3805 11.5912C20.1042 8.07562 16.3031 5.25 11.984 5.25Z"
                stroke="#A4A4A4"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75Z"
                stroke="#A4A4A4"
                strokeWidth="1.5"
                strokeMiterlimit="10"
              />
            </svg>
          </div>
          {/* eslint-disable-next-line camelcase */}
          <div className="answer__view__view-count">{view_count}</div>
        </div>
      </div>
    </div>
  );
}

AnswerItem.propTypes = {
  item: PropTypes.any,
};

export default AnswerItem;
