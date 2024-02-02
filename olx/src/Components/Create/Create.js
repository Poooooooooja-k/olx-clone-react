import React, { Fragment, useCallback, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { Authcontext,FirebaseContext } from '../../store/Context';
import {storage,db} from '../../firebase/Config'
import { getDownloadURL, uploadBytes,ref } from 'firebase/storage';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
const Create = () => {
  const navigate=useNavigate()
  const [name,setName]=useState("")
  const [category,setCategory]=useState("")
  const [price,setPrice]=useState("")
  const [image,setImage]=useState('')
  const user=useContext(Authcontext)
  const date=new Date()
  const storageRef=ref(storage,`/image/${image.name}`)

  const handleSubmit=async()=>{
    try{
      const uploadTask=await uploadBytes(storageRef,image).then((snapshot)=>{
        getDownloadURL(snapshot.ref).then((url)=>{
          addDoc(collection(db,'products'),{
            name:name,
            category:category,
            price:price,
            url:url,
            userId:user.user.uid,
            created:date.toDateString()
          });
        })
      })
      navigate('/')
    }catch(error){
      console.log(error)
    }
  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              id="fname"
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
              id="fname"
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname" >Price</label>
            <br />
            <input className="input" value={price} type="number" id="fname" name="Price" onChange={(e)=>setPrice(e.target.value)} />
            <br />
          
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ''} />
          <br />
              <input
          onChange={(e) => {
            setImage(e.target.files[0])
          }}
          type="file" />
            <br/>
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
