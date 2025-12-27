import { useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";
import API from "../services/api";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessage = async (message) => {
    console.log("Sending:", message);

    try {
      setLoading(true);

      const res = await API.post(
        `/messages/send/${selectedConversation._id}`,
        { message } 
      );

      console.log("Response:", res.data);

      setMessages([...messages, res.data]);
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.error || "Message failed");
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading };
};

export default useSendMessage;
