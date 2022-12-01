import { useEffect, useState } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Signup from './components/Signup';
import Dropdown from './components/Dropdown';
import Card from './components/Card';
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import { initializeApp } from "firebase/app";
import { getAuth, signOut, 
        createUserWithEmailAndPassword, 
        signInWithEmailAndPassword,
        onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";

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
  const colRef = collection(db, 'trips');

  const [userStatus, setUserStatus] = useState(false);
  const [userCards, setUserCards]   = useState([]);
  const [input, setInput] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleInput = function(e) {
    const value = e.target.value;

    setInput({
      ...input,
      [e.target.name]: value
    });
  }

  const signUserIn = function(e) {
    e.preventDefault();

    signInWithEmailAndPassword(auth, input.email, input.password)
    .then(cred => {

      if(cred) {
        setInput({
          email: '',
          confirmEmail: '',
          password: ''
        })

        auth.onAuthStateChanged(user => {
          if (user) {
            setUserStatus(true)
      
            getDocs(colRef)
            .then((snapshot) => {
              let trips = []
              snapshot.docs.forEach((doc) => {
                trips.push({ ...doc.data(), id: doc.id })
              })
              setUserCards(trips)
          })
            .catch((err) => {
              console.log(err)
            })
          } else {
            setUserStatus(false)
          }
        })
        navigate('/')
      } else {
        setInput({
          email: '',
          confirmEmail: '',
          password: ''
        })
      }
    })
  }
 


  return (
    <div className="App">
      <Navbar auth={auth} signOut={signOut} userStatus={userStatus} />
      <Routes>
        <Route path='/' element={userStatus ? <Profile userCards={userCards} /> : <Home />} />
        <Route  path='/login' element={<Login auth={auth} handleInput={handleInput} input={input} signUserIn={signUserIn} />} />
        <Route  path='/signup' element={<Signup auth={auth} createUser={createUserWithEmailAndPassword} />} />
      </Routes>
    </div>
  );
}

export default App;
