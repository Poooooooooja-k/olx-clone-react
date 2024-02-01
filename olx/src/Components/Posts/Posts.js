import React, { useContext, useEffect, useState } from 'react';
import { PostContext } from '../../store/PostContext';
import { db } from '../../firebase/Config';
import Heart from '../../assets/Heart';
import './Post.css';
import { collection, getDocs,query } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

function Posts() {
  const[products,setProducts]=useState([])
  const {setPostDetails}=useContext(PostContext)
  const navigate=useNavigate()

  const handleClick=(product)=>{
    setPostDetails(product)
    console.log(product)
    navigate('view')
  }


  useEffect(()=>{
    const FetchData=async()=>{
      const q=query(collection(db,'products'))
      const querySnapshot=await getDocs(q);
      const data=querySnapshot.docs.map(doc=>({...doc.data(),id:doc.id}))
      setProducts(data)
    }
    FetchData();

  },[])
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          {products.map(product=>{
            return<div
            className="card" onClick={()=>handleClick(product)}
          >
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={product.url} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9;{product.price}</p>
              <span className="kilometer">{product.category}r</span>
              <p className="name">{product.name}</p>
            </div>
            <div className="date">
              <span>{product.created}</span>
            </div>
          </div>
          })}
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
