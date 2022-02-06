import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import React from 'react';
import Main from './main';
import { store } from '../redux';

describe('Test Main component', () => {
  it('should be render', () => {
    render(
      <Provider store={store}>
        <HashRouter>
          <Main />
        </HashRouter>
      </Provider>
    );
    const main = screen.getByTestId('main');

    expect(main).toHaveClass('main');
  });

  it('should render Spinner', () => {
    render(
      <Provider store={store}>
        <HashRouter>
          <Main />
        </HashRouter>
      </Provider>
    );

    const spinner = screen.getByTestId('parentLoader');

    expect(spinner).toBeInTheDocument();
  });

  it('should be response msw', async () => {
    render(
      <Provider store={store}>
        <HashRouter>
          <Main />
        </HashRouter>
      </Provider>
    );

    const titleArticle = await screen.findByText('My website');

    expect(titleArticle).toBeInTheDocument();
  });
});
