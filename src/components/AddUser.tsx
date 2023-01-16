import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { db } from "../firebase/config";
import { addPerson } from "../store/slice/personSlice";

function AddUser() {
  const dispatch = useDispatch();
  const [infoUser, setInfoUser] = useState({
    name: '',
    age: ''
  })

  const handleClickAddUser = async () => {
    const userCollection = collection(db, 'users')
      try{
          await addDoc(userCollection, infoUser)
            .then(() => {
              dispatch(addPerson(infoUser));
              alert('Added user susscessfully!')
            })
        } catch(err) {
          console.log(err);
        }
  }
  
  const handleChangeInfoUser =  (e: any) => {
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
      <label htmlFor="">Person Name:</label> <br />
      <input name="name" onChange={handleChangeInfoUser} placeholder="Enter your name!" /> <br />
      <input name="age" onChange={handleChangeInfoUser} placeholder="Enter your age!" />
      <button onClick={handleClickAddUser}> Add User </button>
    </div>
  );
};

export default AddUser;
