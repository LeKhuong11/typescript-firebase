import React, { useEffect } from 'react';
import './App.css';
import AddUser from './components/AddUser';
import ListUser from './components/ListUser';
import { fetchUser } from './store/slice/personSlice';
import { useAppDispatch } from './store/store';

function App() {
  const dispatch = useAppDispatch();

  //dispatch fetch action Users
  useEffect(() => {
    dispatch(fetchUser());
  }, [])

  
  return (
    <div className="App">
      <h1>Typescript-firebase</h1>
      <AddUser />
      <ListUser />
    </div>
  );
}

export default App;
