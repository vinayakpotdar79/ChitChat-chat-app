import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "./MessageSkeleton";
import Message from "./Message";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  const lastMessageRef = useRef(null);

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto px-4 py-2">
      {!loading &&
        messages.map((message, idx) => (
          <div
            key={message._id}
            ref={idx === messages.length - 1 ? lastMessageRef : null}
          >
            <Message message={message} />
          </div>
        ))}

      {loading &&
        [...Array(3)].map((_, i) => <MessageSkeleton key={i} />)}

      {!loading && messages.length === 0 && (
        <p className="text-center text-gray-400 mt-4">
          Send a message to start the conversation
        </p>
      )}
    </div>
  );
};

export default Messages;
