import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import H1 from '../../components/H1';
import messages from './messages';

export default function ProfileDetailsPage() {
  return (
    <div>
      <Helmet>
        <title>Profile Details Page</title>
        <meta name="description" content="Profile details" />
      </Helmet>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
    </div>
  );
}
