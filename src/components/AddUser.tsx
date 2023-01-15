import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import React, { useRef, useState } from "react";
import { db } from "../firebase/config";

function AddUser() {

  const [infoUser, setInfoUser] = useState({
    name: '',
    age: ''
  })

  const handleClickAddUser = async () => {
    const userCollection = collection(db, 'users')
      try{
          await addDoc(userCollection, infoUser)
            .then(() => {
              alert('Added user susscessfully!')
            })
        } catch(err) {
          console.log(err);
        }
  }
  
  const handleInfoUser =  (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setInfoUser(prev => {
      return {
        ...infoUser,
        [name]: value
      }
    })
  }
  
  return (
    <div>
      <label htmlFor="">Person Name:</label>
      <input name="name" onChange={handleInfoUser} placeholder="Enter your name!" /> <br />
      <input name="age" onChange={handleInfoUser} placeholder="Enter your age!" />
      <button onClick={handleClickAddUser}> Add User </button>
    </div>
  );
};

export default AddUser;
