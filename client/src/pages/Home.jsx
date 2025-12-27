import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Sidebar from "../components/sidebar/Sidebar";
import MessageContainer from "../components/messages/MessageContainer";
import useConversation from "../zustand/useConversation";

const Home = () => {
  const { selectedConversation } = useConversation();

  return (
    <div className="h-screen w-full flex overflow-hidden">
      {/* Sidebar */}
      <div
        className={`
          ${selectedConversation ? "hidden md:block" : "block"}
          w-full md:w-[320px]
          border-r border-slate-700
        `}
      >
        <Sidebar />
      </div>

      {/* Chat */}
      <div
        className={`
          flex-1
          ${!selectedConversation ? "hidden md:flex" : "flex"}
          flex-col
        `}
      >
        <MessageContainer />
      </div>
    </div>
  );
};

export default Home;
