import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Signup from './components/Signup';
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import { initializeApp } from "firebase/app";
import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, getDocs, addDoc, deleteDoc,updateDoc, doc } from "firebase/firestore";

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
  
  const [userStatus, setUserStatus] = useState(false);
  const [userCards, setUserCards]   = useState([]);
  const [input, setInput] = useState({
    email: '',
    password: ''
  });
  const [userId, setUserId] = useState("");
  const [signupInput, setSignupInput] = useState({
    email: '',
    confirmEmail: '',
    password: ''
  });
  const navigate = useNavigate();


  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUserStatus(!!user);
      user && refreshCards(user.uid);
    });
  }, [userId, auth]);

  
  const handleInput = function(e) {
    const value = e.target.value;
    setInput({
      ...input,
      [e.target.name]: value
    });
  }
  const handleSignup = function(e) {
    const value = e.target.value;

    setSignupInput({
      ...signupInput,
      [e.target.name]: value
    });
  }

  const creatUserAccount = async(e) => {
    e.preventDefault();
    try{
      if(signupInput.email !== signupInput.confirmEmail) {
        alert('Emails did not match')
        return;
      }
      const cred = await createUserWithEmailAndPassword(auth, signupInput.email, signupInput.password);
      setSignupInput({
        email: '',
        confirmEmail: '',
        password: ''
      });
      setUserId(cred.user.uid);
      await refreshCards(cred.user.uid);
      navigate('/');
    } catch(err) {
      alert('Invalid email')
    }
  }

  const signUserIn = async (e) => {
    e.preventDefault();
    try{
      const user = await signInWithEmailAndPassword(auth, input.email, input.password);
      setUserId(user.user.uid);
      await refreshCards(user.user.uid);
      navigate('/');
      setInput({
        email: '',
        password: ''
      });
    } catch(err) {
        alert('Invalid email or password')
    }
  }

  
  const postTrip = async (date, description, location, image) => {
    await addDoc(collection(db, "Users", userId, "Trips"), { date, description, location, image });
    refreshCards(userId);
  }

  const updateTrip = async (id, date, description, location, image) => {
    await updateDoc(doc(db, "Users", userId, "Trips", id), {date, description, location, image});
    refreshCards(userId);
  }

  const deleteTrip = (id) => {
      return async () => {
      await deleteDoc(doc(db, "Users", userId, "Trips", id));
      refreshCards(userId);
    }
  };
  

  const refreshCards = async (id) => {
      const colRef = collection(db, "Users", id, "Trips");
      const snapshot = await getDocs(colRef);
      const trips = snapshot?.docs?.map(doc => ({ ...doc.data(), id: doc.id }) ) ?? [];
      setUserCards(trips);
  }


  return (
    <div className="App">
      <Navbar auth={auth} setUserId={setUserId} signOut={signOut} userStatus={userStatus} />
      <Routes>
        <Route path='/' element={userStatus ? <Profile userCards={userCards} postTrip={postTrip} updateTrip={updateTrip} deleteTrip={deleteTrip}/> : <Home />} />
        <Route  path='/login' element={<Login auth={auth} handleInput={handleInput} input={input} signUserIn={signUserIn} />} />
        <Route  path='/signup' element={<Signup auth={auth} signupInput={signupInput} handleSignup={handleSignup} creatUserAccount={creatUserAccount} />} />
      </Routes>
    </div>
  );
}

export default App;