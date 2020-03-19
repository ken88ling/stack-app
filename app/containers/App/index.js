import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import NotFoundPage from '../NotFoundPage/Loadable';
import ProfileDetailsPage from '../ProfileDetailsPage/Loadable';
import HomePage from '../HomePage/Loadable';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  //margin: 0 auto;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet titleTemplate="%s - Stack App" defaultTitle="Stack app">
        <meta name="description" content="Stack application" />
      </Helmet>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/profile-details" component={ProfileDetailsPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}
