import React from 'react';
import { useSelector } from 'react-redux';
import PageNotFound from 'components/pageNotFound/pageNotFound';
import Articles from '../articles/articles';
import Sidebar from '../sidebar/sidebar';
import ButtonScrollTop from '../buttonScrollTop/buttonScrollTop';
import { TStore } from '../redux';
import './main.scss';

function Main(): JSX.Element {
  const { loading } = useSelector((state: TStore) => state.loading);
  const { error } = useSelector((state: TStore) => state.error);

  return (
    <main className="main" data-testid="main">
      <div className="wrapper">
        <Articles />
        {!(loading || error) && <Sidebar />}
        <ButtonScrollTop />
      </div>
      {error && <PageNotFound />}
    </main>
  );
}

export default Main;