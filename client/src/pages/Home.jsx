import React, { useContext, useEffect, useState } from 'react';
import API from '../services/api';
import { AuthContext } from '../context/AuthContext';
import Sidebar from '../components/sidebar/Sidebar';
import MessageContainer from '../components/messages/MessageContainer';
const Home = () => {
  const [msg, setMsg] = useState("");
  const {logout}=useContext(AuthContext)
  const id=111
  useEffect(() => {
    async function getdata() {
      try {
        const res = await API.post(`/api/messages/send/:${id}`);
        setMsg(res.data);
      } catch (error) {
        console.log("Error fetching message",error); 
      }
    }
  //  getdata()
   
  }, []);

  return (
    <div>
      {/* {msg ? msg : "Loading..."} */}
      <Sidebar/>
      <MessageContainer/>
    </div>
  );
};

export default Home;
