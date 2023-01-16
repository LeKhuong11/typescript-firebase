import React, { useState } from "react";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { useAppSelector } from "../store/store";
import { useDispatch } from "react-redux";
import { deletePerson } from "../store/slice/personSlice";

function ListUser(){
  const dispatch = useDispatch();
  
  const [infoUser, setInfoUser] = useState({
    id: 0,
    name: '',
    age: ''
  })

  //get data from redux 
  const persons = useAppSelector((state) => state.person.persons);
  
  const handleUpdateUser = async (id: number, name: string) => {
    const docUser = doc(db, `users/${id}`)
    await updateDoc(docUser, infoUser)
    alert(`Updated user ${name} susscessfully`)
  }
  

  const handleDeleteUser = async (id: number, name: string) => {
    const docUser = doc(db, `users/${id}`)
    try {
      await deleteDoc(docUser)
        .then(() => {
          dispatch(deletePerson({id}))
        })
    } catch(err) {

    }
    alert(`Deleted user ${name}`)
  }

  const handleChangeInfoUser =  (e: any) => {
    const nameTag = e.target.name;
    const value = e.target.value;
    setInfoUser(prev => {
      return {
        ...infoUser,
        [nameTag]: value
      }
    })
  }
  console.log(infoUser);
  
  return (
    <div style={{marginTop: '2rem'}}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person) => (
            <tr key={person.id}>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td><button onClick={() => setInfoUser({name: person.name, id: person.id, age: person.age})}>Update</button></td>
              <td><button onClick={() => handleDeleteUser(person.id, person.name)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      {infoUser.name && (
        <div>
          <input defaultValue={infoUser.name} placeholder="Enter Your Name" name="name" onChange={handleChangeInfoUser} /> <br />
          <input defaultValue={infoUser.age} placeholder="Enter Your Age" name="age" onChange={handleChangeInfoUser} />
          <button onClick={() => handleUpdateUser(infoUser.id, infoUser.name)}>Done</button>
        </div>
      )}
  </div>
  );
};

export default ListUser;
