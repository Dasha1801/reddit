import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from '../redux';
import Services from './services';

describe('Test Services component', () => {
  it('should render component', () => {
    render(
      <Provider store={store}>
        <Services id="6519574" code="41867" />
      </Provider>
    );

    expect(screen.getByText(/дополнительные услуги/i)).toBeInTheDocument();
    expect(screen.queryByText(/все услуги/i)).not.toBeInTheDocument();
  });

  it('should render button "все услуги"', () => {
    render(
      <Provider store={store}>
        <Services id="6099773" code="41867" />
      </Provider>
    );

    expect(screen.getByText(/все услуги/i)).toBeInTheDocument();
  });

  it('should render menuServices when click button "все услуги"', () => {
    render(
      <Provider store={store}>
        <Services id="6099773" code="41867" />
      </Provider>
    );

    userEvent.click(screen.getByText(/все услуги/i));

    expect(screen.getByTestId('menuServices')).toBeInTheDocument();
  });
});
