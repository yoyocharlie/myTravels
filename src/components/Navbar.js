import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';

const Navbar = (props) => {

  const logUserOut = function() {
    props.signOut(props.auth)
    .then(() => {
      console.log('user signed out')

    })
  }

  return (
    <div>
    <nav className="relative mb-20 mx-auto shadow-md text-3xl bg-pinkishRed p-3 px-20">
        <div className="flex items-center justify-between">
            <div>
                <h1 className="text-white p-1 font-rubik-glitch">myTravels</h1>
            </div>
            <div className="hidden md:flex space-x-12 font-roboto">
                <Link to='/' className="text-lg p-2 text-white hover:text-darkGray hover:bg-white hover:rounded">Home</Link>
                <Link to='/login' className="text-lg p-2 text-white hover:text-darkGray hover:bg-white hover:rounded">Login</Link>
                <Link to='/' onClick={logUserOut} className="text-lg p-2 text-white hover:text-darkGray hover:bg-white hover:rounded">Logout</Link>
                <Link to='/signup' className="text-lg p-2 text-darkGray rounded bg-white hover:bg-darkGray hover:text-white">Sign Up</Link>
            </div>
            <Dropdown />
        </div>
    </nav>
  </div>
  )
}

export default Navbar