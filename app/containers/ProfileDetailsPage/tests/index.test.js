import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';

import ProfileDetails from '../index';

describe('<FeaturePage />', () => {
  it('should render its heading', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale="en">
        <ProfileDetails />
      </IntlProvider>,
    );

    expect(firstChild).toMatchSnapshot();
  });
});
