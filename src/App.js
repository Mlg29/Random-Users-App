import React, {useEffect} from 'react';
import axios from "axios"
import './App.css';
import {addUsers } from "./redux/actions/user"
import store from './redux/store';

import Header from "./Components/Header"
import Users from "./Components/UsersList"


function App() {

  useEffect(() => {
    axios.get("http://localhost:3001/users")
    .then(res => {
      console.log(res.data)
      store.dispatch(addUsers(res.data.results))
    })
  }, [])
  return (
    <div className="">
        <Header />
        <Users />
    </div>
  );
}

export default App;
