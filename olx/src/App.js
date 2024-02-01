import React, { useEffect, useContext } from 'react';
import './App.css';
import Home from './Pages/Home';
import { Routes, Route } from 'react-router-dom';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import { Authcontext ,FirebaseContext} from './store/Context';
import { getAuth,onAuthStateChanged } from 'firebase/auth';
import Create from './Pages/Create'
import ViewPost from './Pages/ViewPost'
import Post from './store/PostContext';

function App() {
  const  authctx = useContext(Authcontext)
  const firebaseApp=useContext(FirebaseContext)
  // const auth = getAuth(firebaseapp);
 
  return (
    <div>
      <Post>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/create' element={<Create/>}/>
        <Route path='/view' element={<ViewPost/>}/>
      </Routes>
      </Post>
    </div>
  );
}

export default App;
