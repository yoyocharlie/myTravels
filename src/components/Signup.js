import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Signup(props) {
  const [input, setInput] = useState({
    email: '',
    confirmEmail: '',
    password: ''
  });

  const handleInput = function(e) {
    const value = e.target.value;

    setInput({
      ...input,
      [e.target.name]: value
    });
  }
  
  const creatUserAccount = function(e) {
    e.preventDefault();

    props.createUser(props.auth, input.email, input.password)
    .then(cred => {
      setInput({
        email: '',
        confirmEmail: '',
        password: ''
      })
    })
  }

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h1 className="text-4xl text-center text-pinkishRed p-1 font-rubik-glitch">myTravels</h1>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">
              Sign Up
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <Link to='/login' className="font-medium text-pinkishRed hover:text-indigo-500">
                Login
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6" action="_self" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                  value={input.email}
                  onChange={handleInput}
                />
              </div>
              <div>
                <label htmlFor="confirm-email" className="sr-only">
                  Confirm Email Address
                </label>
                <input
                  id="confirm-email"
                  name="confirmEmail"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Confirm Email"
                  value={input.confirmEmail}
                  onChange={handleInput}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                  value={input.password}
                  onChange={handleInput}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-pinkishRed py-2 px-4 text-sm font-medium text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={creatUserAccount}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
