import React,{useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Authcontext,FirebaseContext } from '../../store/Context';
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { getAuth,signOut } from 'firebase/auth';
import { Auth } from '../../firebase/Config'


function Header() {
  const {user,setUser}=useContext(Authcontext)
  const firebaseApp=useContext(FirebaseContext)
  const auth = getAuth(firebaseApp);
  const navigate=useNavigate()
  const handleLogout = async () => {
    try {
       await signOut(auth);
       setUser()
       navigate('/login');
    } catch (error) {
       console.error('Error signing out:', error);
    }
   };
  console.log(user)
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span>{user? 'Hello,user':<Link to='/login'>
            <a>Login</a></Link>}</span>
          <hr />
        </div>
        {user && (
          <span className='logout' onClick={handleLogout}>Logout</span>
        )} 

        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
