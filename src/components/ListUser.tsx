import React, { useState } from "react";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { useAppSelector } from "../store/store";

function ListUser(){
  const [ showInput, setShowInput] = useState(false);
  const [infoUser, setInfoUser] = useState({
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
    await deleteDoc(docUser)
    alert(`Deleted user ${name}`)
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
    <div style={{display: 'flex', justifyContent: 'center', marginTop: '2rem'}}>
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
              <td><button onClick={() => setShowInput(!showInput)}>Update</button></td>
              <td><button onClick={() => handleDeleteUser(person.id, person.name)}>Delete</button></td>
              {showInput && (
                <td>
                  <input placeholder="Enter Your Name" name="name" onChange={handleInfoUser} /> 
                  <input placeholder="Enter Your Age" name="age" onChange={handleInfoUser} />
                  <button onClick={() => handleUpdateUser(person.id, person.name)}>Done</button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListUser;
