import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, lastIdx, emoji }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();

  const isSelected = selectedConversation?._id === conversation._id;
  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <>
      <div
        onClick={() => setSelectedConversation(conversation)}
        className={`flex gap-2 items-center p-2 rounded cursor-pointer
        hover:bg-sky-500 ${isSelected ? "bg-sky-500" : ""}`}
      >
        {/* ✅ DaisyUI avatar */}
        <div className={`avatar ${isOnline ? "avatar-online" : ""}`}>
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="user" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex justify-between items-center">
            <p className="font-bold text-gray-200">
              {conversation.fullName}
            </p>
            <span>{emoji}</span>
          </div>
        </div>
      </div>

      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};

export default Conversation;
