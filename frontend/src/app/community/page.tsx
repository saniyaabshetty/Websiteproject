"use client"
import { useContext, useState } from 'react';
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import StateContext from '../StateContext';
export default function Component() {
    const appState = useContext(StateContext)
    const [userInput, setUserInput] = useState('');
    const [posts, setPosts] = useState([
        {
            username: 'Saniyaa',
            content: 'Any Good Interior Designers in Bandra?',
            timestamp: '1:24 PM · Jan 31, 2024 · 1,127 Views',
        },
        {
            username: 'Raj',
            content: 'I did my garage design with the GarageBand group. They made it so good. Definitely check them out.',
            timestamp: '13h',
        },
        {
            username: 'Tom',
            content: 'Ya, they are the best designers but their rate is too high. Also, they may sometimes extend the deadline by a month.',
            timestamp: '5h',
        },
    ]);

    const handlePost = () => {
        if (userInput.trim() !== '') {
            const newPost = {
                username: appState.user.name,
                content: userInput,
                timestamp: new Date().toLocaleString(),
            };
    
            setPosts([newPost, ...posts]);  // Add the new post at the beginning
            setUserInput('');
        }
    };
    

    return (
        <div className="max-w-2xl mt-40 mx-auto">
            <div className="space-y-6">
                {/* New card for posting */}
                <div className="p-4 bg-white rounded-lg shadow">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <Avatar>
                                <AvatarImage alt="User profile picture" src="/placeholder.svg?height=40&width=40" />
                                <AvatarFallback>S</AvatarFallback>
                            </Avatar>
                            <div>
                                <div className="text-sm font-semibold">{appState.user.name}</div>
                            </div>
                        </div>
                        <DotIcon className="text-gray-400" />
                    </div>
                    <div className="mt-3">
                        <textarea
                            className="w-full p-2 border rounded"
                            rows= "4"
                            placeholder="Write your post..."
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                        />
                    </div>
                    <div className="mt-4">
                        <Button className="w-full" variant="secondary" onClick={handlePost}>
                            Post your reply
                        </Button>
                    </div>
                </div>

                {/* Existing code for displaying posts */}
                {posts.map((post, index) => (
                    <PostCard key={index} post={post} />
                ))}
            </div>
        </div>
    );
}

function PostCard({ post }) {
    return (
        <div className="p-4 bg-white rounded-lg shadow">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <Avatar>
                        <AvatarImage alt="User profile picture" src="/placeholder.svg?height=40&width=40" />
                        <AvatarFallback>S</AvatarFallback>
                    </Avatar>
                    <div>
                        <div className="text-sm font-semibold">{post.username}</div>
                        <div className="text-sm">{post.content}</div>
                    </div>
                </div>
                <DotIcon className="text-gray-400" />
            </div>

            <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
                <span>{post.timestamp}</span>
                <TextIcon className="text-gray-400" />
                <span>0</span>
                <TwitterIcon className="text-gray-400" />
                <span>0</span>
                <HeartIcon className="text-gray-400" />
                <span>0</span>
                <ShareIcon className="text-gray-400" />
                <span>0</span>
            </div>
        </div>
    );
}

function DotIcon(props) {
    return (
        <svg
            {...props}
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
            <circle cx="12.1" cy="12.1" r="1" />
        </svg>
    );
}

function HeartIcon(props) {
    return (
        <svg
            {...props}
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
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
    );
}

function ShareIcon(props) {
    return (
        <svg
            {...props}
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
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
            <polyline points="16 6 12 2 8 6" />
            <line x1="12" x2="12" y1="2" y2="15" />
        </svg>
    );
}

function TextIcon(props) {
    return (
        <svg
            {...props}
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
            <path d="M17 6.1H3" />
            <path d="M21 12.1H3" />
            <path d="M15.1 18H3" />
        </svg>
    );
}

function TwitterIcon(props) {
    return (
        <svg
            {...props}
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
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
    );
}
