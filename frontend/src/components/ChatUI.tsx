import React, { useState, ChangeEvent } from 'react';
import toast from 'react-hot-toast';
import ReactMarkdown from 'react-markdown';
import TTS from './TTS';

interface Message {
    text: string;
    sender: 'user' | 'bot';
}

interface DynamicChatProps {
    messages: Message[];
    getAnswer: (newMessages: Message[]) => void;
}

export default function ChatUI({ messages, getAnswer }: DynamicChatProps) {
    const [inputMessage, setInputMessage] = useState('');

    const handleSendMessage = () => {
        toast.success('Posted');
        if (!inputMessage.trim()) return;
        const newMessages: Message[] = [...messages, { text: inputMessage, sender: 'user' }];
        getAnswer(newMessages);
        setInputMessage('');
    };

    return (
        <div className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto min-h-[85vh] p-4 space-y-4">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`flex items-start ${message.sender.trim() === 'user' ? 'justify-end' : 'justify-start'
                            } space-x-2 mb-2`}
                    >
                        {message.sender.trim() !== 'user' && (
                            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white">
                                
                            </div>
                        )}
                        <div
                            className={`max-w-xs bg-opacity--90 backdrop-filter backdrop-blur-lg ${message.sender?.trim() === 'user'
                                ? 'bg-orange-200 text-gray-800'
                                : 'bg-register-300 text-black'
                                } p-2 rounded-lg`}
                        >

                            <ReactMarkdown>{message.text?.trim()}</ReactMarkdown>
                        </div>
                    </div>
                ))}
            </div>
            <div className="border-t p-4">
                <div className="flex space-x-3">
                    <input
                        className="flex-1 py-2 px-3 rounded-md border border-gray-500 focus:ring-orange-500 focus:border-orange-500"
                        placeholder="Type your message"
                        type="text"
                        value={inputMessage}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setInputMessage(e.target.value)}
                    />

                    <button
                        className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-orange-500 text-white"
                        onClick={handleSendMessage}
                    >
                        <SendIcon className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}

interface SendIconProps {
    className: string;
}

function SendIcon({ className }: SendIconProps) {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m22 2-7 20-4-9-9-4Z" />
            <path d="M22 2 11 13" />
        </svg>
    );
}
