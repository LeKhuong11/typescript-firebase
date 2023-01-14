import React, { useEffect } from 'react';
import './App.css';
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
      <ListUser />
    </div>
  );
}

export default App;
