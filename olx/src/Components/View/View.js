import React, { useContext, useEffect, useState } from 'react';
import { PostContext } from '../../store/PostContext';
import './View.css';
import { db } from '../../firebase/Config';
import { query,getDocs,collection,where } from 'firebase/firestore';


function View() {
  const [userDetails,setUserDetails]=useState()
  const {postDetails}=useContext(PostContext)
  console.log(postDetails.userId,'.............................................................................................')
  const userId=postDetails.userId

  useEffect(()=>{
    const FetchData=async ()=>{
      const q=query(collection(db,'users'),where('id','==',userId));
      const querySnapshot= await getDocs(q);

      const data=querySnapshot.docs.map(doc=>(doc.data()))
      console.log(...data)
      setUserDetails(...data)
      
    }
    FetchData();
  },[])

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9;{postDetails.price}</p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.created}</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
         {userDetails ?(
          <div>
            <span>Name:</span><span>{userDetails.userName}</span><br></br>
            <span>Phone:</span><span>{userDetails.phoneNo}</span><br></br>
           
          </div>):(
              <div></div>
          )

         }
        </div>
      </div>
    </div>
  );
}
export default View;
