import { render, cleanup, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from '../Login';



test('Login inputs should render', () => {
    render(
        <MemoryRouter>
          <Login input={{email: 'test@gmail.com', password: 'testpassword'}} />
        </MemoryRouter>
      );

      const emailInput = screen.getByTestId('emailInput');
      const passwordInput = screen.getByTestId('passwordInput');
    
      expect(emailInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
    
    cleanup();
  })


  test("Should set the email input value to test@gmail.com", () => {
    let input = {
        email: '',
        password: '12345'
    };
    input.email = 'test@gmail.com'

    const handleInput = (userInput) => {
        return ({
        ...userInput,
        email: userInput.email
      })
    }

    expect(handleInput(input)).toEqual({
        email: 'test@gmail.com',
        password: '12345'
    })

    cleanup();
})