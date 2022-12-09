import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from '../Home';

test("Get Started button should render", () => {
  render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
  );

  expect(screen.getByTestId('getStartedBtn')).toBeInTheDocument();

  cleanup();
})