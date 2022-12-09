import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from '../Home';

test("login button click should call onClick function", () => {
  render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
  );

  expect(screen.getByTestId('getStartedBtn')).toBeInTheDocument();

  cleanup();
})