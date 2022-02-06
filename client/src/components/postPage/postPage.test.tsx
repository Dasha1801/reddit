import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { item } from '../../shared/mocks';
import ContentArticle from '../contentArticle/contentArticle';
import { store } from '../redux';
import PostPage from './postPage';

describe('Test PostPage component', () => {
  it('should render PostPage when click on content article', () => {
    render(
      <Provider store={store}>
        <HashRouter>
          <ContentArticle item={item} />
        </HashRouter>
      </Provider>
    );

    const linkToPost = screen.getByTestId('linkToPost');

    expect(linkToPost).toHaveTextContent('My website freezes after ...?');

    fireEvent.click(linkToPost);

    render(
      <Provider store={store}>
        <HashRouter>
          <PostPage />
        </HashRouter>
      </Provider>
    );

    expect(screen.getByTestId('post')).toHaveTextContent(
      'What trying to do:I work for a TV station as a broadcast Technician.What try'
    );
  });

  it('should be response msw', async () => {
    render(
      <Provider store={store}>
        <HashRouter>
          <PostPage />
        </HashRouter>
      </Provider>
    );

    const comment = await screen.findByText('simon');

    expect(comment).toBeInTheDocument();
  });
});
