import { useEffect, useState, useRef } from "react";
import { supabase } from "../supabaseClient";
import "../App.css";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const messagesEndRef = useRef(null);

  useEffect(() => {
    fetchMessages();

    const channel = supabase
      .channel("realtime-chat")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "messages",
        },
        (payload) => {
          setMessages((prev) => [...prev, payload.new]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  async function fetchMessages() {
    const { data } = await supabase
      .from("messages")
      .select("*")
      .order("created_at", { ascending: true });

    setMessages(data || []);
  }

  async function sendMessage() {
    if (!input.trim()) return;

    await supabase.from("messages").insert([
      {
        content: input,
      },
    ]);

    setInput("");
  }

  return (
    <div className="chat-page">

      <div className="chat-container">

        <div className="chat-header">
          <div>
            <h1>Community Chat</h1>
            <p>Realtime organization discussion space</p>
          </div>

          <div className="online-status">
            <span className="online-dot"></span>
            Live
          </div>
        </div>

        <div className="chat-messages">

          {messages.map((msg) => (
            <div
              key={msg.id}
              className="message-row"
            >
              <div className="message-avatar">
                U
              </div>

              <div className="message-bubble">
                <p>{msg.content}</p>

                <span>
                  {new Date(msg.created_at).toLocaleTimeString()}
                </span>
              </div>
            </div>
          ))}

          <div ref={messagesEndRef}></div>

        </div>

        <div className="chat-input-area">

          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) =>
              setInput(e.target.value)
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
          />

          <button onClick={sendMessage}>
            Send
          </button>

        </div>

      </div>

    </div>
  );
}

export default Chat;