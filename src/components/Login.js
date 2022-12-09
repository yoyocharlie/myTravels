import { Link } from 'react-router-dom';

export default function Login(props) {

  return (
    <>
      <div className="mt-28 flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8 p-10 bg-white rounded-lg shadow-lg">
          <div>
            <h1 className="xs:text-4xl sm:text-5xl text-center text-pinkishRed p-1 font-rubik-glitch">myTravels</h1>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-black">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <Link to='/signup' className="font-medium text-pinkishRed hover:text-indigo-500">
                create an account
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST" data-testid="loginForm">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email Address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  data-testid="emailInput"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                  value={props.input.email}
                  onChange={props.handleInput}
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
                  data-testid="passwordInput"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                  value={props.input.password}
                  onChange={props.handleInput}
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
                onClick={props.signUserIn}
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
