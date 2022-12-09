import { render, cleanup, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../Navbar';

test("when auth returns user object, user status should be set to associate boolean", () => {
    let userStatus = false;
    let user = {
        email: 'test@gmail.com',
        password: '12345'
    };
    let undefinedUser = undefined;

    const authFunction = ((user) => {
          user = !!user;
          return userStatus = user;
        });
    
    expect(authFunction(user)).toBe(true);
    expect(authFunction(undefinedUser)).toBe(false);
    
    cleanup();
})

test("logout button should render when userStatus is true", () =>  {
    const userStatus = true;
    render(
        <MemoryRouter>
          <Navbar userStatus={userStatus} />
        </MemoryRouter>
    );
    
    const loginButton = screen.getByTestId('logoutButton');

    expect(loginButton).toBeInTheDocument();

    cleanup();
})