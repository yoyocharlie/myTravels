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
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from 'uuid';


function App() {
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: "mytravel-d9e6a.firebaseapp.com",
    projectId: "mytravel-d9e6a",
    appId: "1:1004896394275:web:9be378111fe2cd6bdf2596",
    measurementId: "G-K61C1Y3KRF",
    storageBucket: "mytravel-d9e6a.appspot.com",
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const storage = getStorage(app);
  
  const [userStatus, setUserStatus] = useState(false);
  const [userCards, setUserCards]   = useState([]);
  const [input, setInput] = useState({
    email: '',
    password: ''
  });
  const [userId, setUserId] = useState("");
  const [signupInput, setSignupInput] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [loginError, setLoginError] = useState(false);

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
      if(signupInput.password !== signupInput.confirmPassword) {
        setPasswordError(err => !err)
        return;
      }
      const cred = await createUserWithEmailAndPassword(auth, signupInput.email, signupInput.password);
      setSignupInput({
        email: '',
        password: '',
        confirmPassword: ''
      });
      setUserId(cred.user.uid);
      setPasswordError(false);
      setEmailError(false);
      await refreshCards(cred.user.uid);
      navigate('/');
    } catch(err) {
      setEmailError(err => !err)
    }
  }

  const signUserIn = async (e) => {
    e.preventDefault();
    try{
      const user = await signInWithEmailAndPassword(auth, input.email, input.password);
      setUserId(user.user.uid);
      await refreshCards(user.user.uid);
      navigate('/');
      setLoginError(false);
      setInput({
        email: '',
        password: ''
      });
    } catch(err) {
        setLoginError(err => !err);
    }
  }

  const postTrip = async (date, description, location, image) => {
    if (image !== undefined) {
      const userStorage = ref(storage, `images${userId}/${v4()}`);
      const upload = await uploadBytes(userStorage, image);
      const url = await getDownloadURL(upload.ref);
      await addDoc(collection(db, "Users", userId, "Trips"), { date, description, location, url });
      refreshCards(userId);
    } else {
      await addDoc(collection(db, "Users", userId, "Trips"), { date, description, location });
      refreshCards(userId);
    }
  }

  const updateTrip = async (id, date, description, location) => {
    await updateDoc(doc(db, "Users", userId, "Trips", id), {date, description, location});
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
        <Route  path='/login' element={<Login auth={auth} handleInput={handleInput} input={input} signUserIn={signUserIn} loginError={loginError} />} />
        <Route  path='/signup' element={<Signup auth={auth} signupInput={signupInput} handleSignup={handleSignup} creatUserAccount={creatUserAccount} passwordError={passwordError} emailError={emailError} />} />
      </Routes>
    </div>
  );
}

export default App;