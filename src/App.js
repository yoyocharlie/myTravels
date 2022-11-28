import { Link, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Dropdown from './components/Dropdown';
import Hero from "./components/Hero";
import Login from "./components/Login";
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import { initializeApp } from "firebase/app";
import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyCzKdFbCfH0Rhx_bEE79rZyga2sUWDyNGA",
    authDomain: "mytravel-d9e6a.firebaseapp.com",
    projectId: "mytravel-d9e6a",
    appId: "1:1004896394275:web:9be378111fe2cd6bdf2596",
    measurementId: "G-K61C1Y3KRF"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  return (
    <div className="App">
      {/* <Profile /> */}
      <Navbar auth={auth} signOut={signOut} />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route  path='/login' element={<Login auth={auth} login={signInWithEmailAndPassword} />} />
        <Route  path='/signup' element={<Signup auth={auth} createUser={createUserWithEmailAndPassword} />} />
      </Routes>
    </div>
  );
}

export default App;
