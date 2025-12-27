import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";
import API from "../services/api"; 

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      try {
        setLoading(true);

        const res = await API.get(
          `/messages/${selectedConversation._id}`
        );

        setMessages(res.data);
      } catch (error) {
        toast.error(
          error.response?.data?.error || "Failed to fetch messages"
        );
      } finally {
        setLoading(false);
      }
    };

    if (selectedConversation?._id) {
      getMessages();
    }
  }, [selectedConversation?._id, setMessages]);

  return { messages, loading };
};

export default useGetMessages;
