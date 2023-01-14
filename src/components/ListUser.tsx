import React from "react";
import { useAppSelector } from "../store/store";

const ListUser = () => {

  //get data from redux 
  const persons = useAppSelector((state) => state.person.persons);
  
  return (
    <div>
      <h1>Typescript-Firestore</h1>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListUser;
