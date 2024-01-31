import React, { useState ,useContext} from 'react';
import { FirebaseContext } from '../../store/Context';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import Logo from '../../olx-logo.png';
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import { getFirestore, collection, addDoc } from 'firebase/firestore';


export default function Signup() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");
  const { firebaseapp } = useContext(FirebaseContext);
  const auth = getAuth(firebaseapp);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firebaseapp);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User created:", user);
        const db = getFirestore();
        addDoc(collection(db, 'users'), {
          id: user.uid,
          userName: userName,
          phoneNo: phoneNo
        }).then(()=>{
          console.log("Redirecting to login page...");
          navigate('/login');
        })
      })
      .catch((error) => {
        console.error("Error creating user:", error.message);
      });
  }; 

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt="OLX Logo" />
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button type="submit">Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
