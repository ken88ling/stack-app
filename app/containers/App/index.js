import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import NotFoundPage from '../NotFoundPage/Loadable';
import HomePage from '../HomePage/Loadable';
import DetailsPage from '../DetailsPage/Loadable';

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
        <Route exact path="/details/:id" component={DetailsPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}
