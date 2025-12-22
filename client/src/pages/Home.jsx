import React, { useContext, useEffect, useState } from 'react';
import API from '../services/api';
import { AuthContext } from '../context/AuthContext';
const Home = () => {
  const [msg, setMsg] = useState("");
  const {logout}=useContext(AuthContext)
  useEffect(() => {
    async function getdata() {
      try {
        const res = await API.get('/auth/home');
        setMsg(res.data);
      } catch (error) {
        console.log("Error fetching message",error); 
      }
    }
   getdata()
   
  }, []);

  return (
    <div>
      {/* Display the value from the state variable */}
      {msg ? msg : "Loading..."}
    </div>
  );
};

export default Home;
