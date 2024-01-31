import React, { useEffect, useContext } from 'react';
import './App.css';
import Home from './Pages/Home';
import { Routes, Route } from 'react-router-dom';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import { Authcontext ,FirebaseContext} from './store/Context';
import { getAuth,onAuthStateChanged } from 'firebase/auth';



function App() {
  const  authctx = useContext(Authcontext)
  const firebaseApp=useContext(FirebaseContext)
  // const auth = getAuth(firebaseapp);
  useEffect(() => {
    if (firebaseApp) {
      const auth = getAuth(firebaseApp);
      onAuthStateChanged(auth, (user) => {
        console.log(user.displayName)
        authctx.setUser(user);
      });
    }
  }, [firebaseApp, authctx.setUser]);
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
