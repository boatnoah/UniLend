"use client";
import React, { useState, useEffect, useCallback } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";

export default function ChatRoom() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "user1",
      text: "Hey there!",
      time_sent: new Date("2023-05-10T10:00:00"),
    },
    {
      id: 2,
      sender: "user2",
      text: "Hi! How are you?",
      time_sent: new Date("2023-05-10T10:01:00"),
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const { toast } = useToast();

  const sendMessage = useCallback(
    async (message) => {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      };

      try {
        const response = await fetch("/api/messages", options);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setMessages([...data]);
        console.log(messages);
        toast({
          title: "Message sent",
        });
      } catch (error) {
        console.log("Error sending message:", error);
        toast({
          title: "Error sending message",
          variant: "destructive",
        });
      }
    },
    [toast],
  );

  useEffect(() => {
    if (messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      sendMessage(lastMessage);
    }
  }, [messages, sendMessage]);

  const handleSendMessage = (event) => {
    event.preventDefault();
    if (newMessage.trim() === "") return;

    const newMsg = {
      id: messages.length + 1,
      sender: messages.length % 2 === 0 ? "user1" : "user2",
      text: newMessage,
      time_sent: new Date(),
    };

    setMessages((prevMessages) => [...prevMessages, newMsg]);
    setNewMessage("");
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Chat Room
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] w-full pr-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start mb-4 ${
                message.sender === "user1" ? "justify-end" : "justify-start"
              }`}
            >
              {message.sender === "user2" && (
                <Avatar className="w-8 h-8 mr-2">
                  <AvatarImage src="/placeholder-user.jpg" alt="User 2" />
                  <AvatarFallback>U2</AvatarFallback>
                </Avatar>
              )}
              <div
                className={`px-4 py-2 rounded-lg ${
                  message.sender === "user1"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <p className="text-xs mt-1 opacity-70">
                  {message.time_sent.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
              {message.sender === "user1" && (
                <Avatar className="w-8 h-8 ml-2">
                  <AvatarImage src="/placeholder-user.jpg" alt="User 1" />
                  <AvatarFallback>U1</AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form onSubmit={handleSendMessage} className="flex w-full">
          <Input
            type="text"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-grow mr-2"
          />
          <Button type="submit">Send</Button>
        </form>
      </CardFooter>
    </Card>
  );
}
