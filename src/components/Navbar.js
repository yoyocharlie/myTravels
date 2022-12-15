import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  const setUserId = props.setUserId;
  const signOut = props.signOut;
  const auth = props.auth;
  const resetErrorState = props.resetErrorState;

  const logUserOut = async() => {
      await signOut(auth);
      setUserId('');
  }

  const userStatus = props.userStatus;

  return (
    <div className="fixed w-full z-50 top-0">
      <nav className="relative mb-20 mx-auto shadow-md text-3xl bg-pinkishRed p-3 md:px-8">
          <div className="flex items-center justify-between">
              <div>
                  <h1 className="text-white md:p-1 font-rubik-glitch">myTravels</h1>
              </div>
              <div className="hidden md:flex space-x-12 font-roboto">
                  {userStatus === false && <Link to='/' className="text-lg p-1 text-white hover:text-darkGray hover:bg-white hover:rounded">Home</Link>}
                  {userStatus === false && <Link to='/login' className="text-lg p-1 text-white hover:text-darkGray hover:bg-white hover:rounded">Login</Link>}
                  {userStatus && <Link to='/' onClick={logUserOut} data-testid="logoutButton" className="text-lg p-1 text-white hover:text-darkGray hover:bg-white hover:rounded">Logout</Link>}
                  {userStatus === false && <Link to='/signup' className="text-lg p-1 text-darkGray rounded bg-white hover:bg-darkGray hover:text-white">Sign Up</Link>}
              </div>
              <Dropdown logUserOut={logUserOut} userStatus={userStatus} auth={props.auth} />
          </div>
      </nav>
    </div>
  )
}

export default Navbar