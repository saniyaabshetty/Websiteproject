"use client";

import { useContext, useEffect, useState } from 'react';
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Axios from 'axios';
import StateContext from '../StateContext';
import { usePathname } from 'next/navigation';
import Link from 'next/link';


export default function DynamicChattingInterface({ chattingWith }) {
    
    const path = usePathname()
    const appState = useContext(StateContext);
    const [messages, setMessages] = useState([])

    const getChats = async () => {
        try {
            const chats = await Axios.get(`/get-my-chat/${appState.user.id}/${path.split("/")[3]}`)
            console.log(chats.data)
            setMessages(chats.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        // getChats()
        setInterval(getChats, 3000)
    }, [])

    // Function to handle message submission
    const handleSendMessage = async (messageText) => {
        const newMessage = {
            "senderName": appState.user.name,
            "messageContent": messageText,
            "receiverId": path.split("/")[3],
            "senderId": appState.user.id,
            "image": null

        };
        setMessages([...messages, newMessage]);

        try {
            await Axios.post("/send-chat", newMessage);
        } catch (e) {

        }
    };

    const isUser = (msg) => {
        return appState.user.id === msg.senderId
    }

    return (
        <div className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {/* Map through messages to render dynamic content */}
                {messages.map((message, index) => (
                    <div key={index} className={`flex items-end ${!isUser(message) ? 'justify-start' : 'justify-end'} space-x-2`}>
                        <div className={`p-2 ${!isUser(message) ? 'bg-gray-200 dark:bg-gray-800' : 'bg-orange-600 text-white'} rounded-lg`}>
                            <p className="text-sm">{message.messageContent}</p>
                            {message.image && <img alt="Chat image" className="rounded-lg" src={message.image} style={{ aspectRatio: "200/200", objectFit: "cover" }} />}
                        </div>

                    </div>
                ))}
            </div>
            <div className="border-t p-4">
                {/* Form for user input */}
                <form
                    className="flex space-x-2"
                    onSubmit={(e) => {
                        e.preventDefault();
                        const messageInput = e.target.elements.message;
                        handleSendMessage(messageInput.value);
                        messageInput.value = ''; // Clear input after sending message
                    }}
                >
                    <Input
                        className="flex-1"
                        placeholder="Type a message"
                        name="message"
                    />
                    <Button type="submit">Send</Button>
                    <Button variant="ghost">Upload</Button>
                    <Link href={`/approve/${path.split("/")[3]}`}><Button variant="ghost">Approve</Button></Link>
                    <Button variant="destructive">Reject</Button>
                </form>
            </div>
        </div>
    );
}
