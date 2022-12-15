import { Link } from 'react-router-dom';

export default function Signup(props) {
  const signupInput = props.signupInput;
  const handleSignup = props.handleSignup;
  const creatUserAccount = props.creatUserAccount;

  return (
    <div className="bg-[url('../images/valley.png')] bg-cover h-screen">
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8 p-10 bg-white rounded-lg shadow-lg">
          <div>
            <h1 className="xs:text-4xl sm:text-5xl text-center text-pinkishRed p-1 font-rubik-glitch">myTravels</h1>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-black">
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
                {props.emailError && <div className="text-red-600">*Invalid Email</div>}
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                  value={signupInput.email}
                  onChange={handleSignup}
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
                  className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                  value={signupInput.password}
                  onChange={handleSignup}
                />
              </div>
              <div className="h-20">
                <label htmlFor="confirm-password" className="sr-only">
                  Confirm Password
                </label>
                <input
                  id="confirm-password"
                  name="confirmPassword"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Confirm Password"
                  value={signupInput.confirmEmail}
                  onChange={handleSignup}
                />
                {props.passwordError && <div className="text-red-600">*Passwords do not match</div>}
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
    </div>
  )
}
