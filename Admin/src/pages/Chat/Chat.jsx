import React, { useState } from 'react';

const users = [
    { id: 1, name: 'Rehab', role: 'Doctor' },
    { id: 2, name: 'Abdullah', role: 'Doctor' },
    { id: 3, name: 'Abid', role: 'Doctor' },
    { id: 4, name: 'Ali', role: 'Doctor' },
    { id: 5, name: 'Hammad', role: 'Doctor' },
    { id: 6, name: 'Hasnat', role: 'Doctor' },
    { id: 7, name: 'Abdul Hadi', role: 'Doctor' },
    // ...other users
];

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [activeUser, setActiveUser] = useState(users[0]);
    const [showUsersList, setShowUsersList] = useState(false);

    // Function to get users with messages
    const getUsersWithMessages = () => {
        const userIdsWithMessages = new Set(messages.map(message => message.senderId));
        return users.filter(user => userIdsWithMessages.has(user.id) || user.id === activeUser.id);
    };

    const sendMessage = () => {
        if (input.trim() !== '') {
            const newMessage = {
                id: Date.now(),
                text: input,
                senderId: activeUser.id,
                sender: 'patient',
                timestamp: new Date().toLocaleTimeString(),
            };
            setMessages([...messages, newMessage]);
            setInput('');
        }
    };

    const deleteMessage = messageId => {
        setMessages(messages.filter(message => message.id !== messageId));
    };

    return (
        <div className="flex flex-col md:flex-row h-screen bg-gray-100">
            {/* User list */}
            <div className="md:w-1/4 bg-white">
                <div className="flex items-center p-3 shadow-md">

                    <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-full"
                        type="search" name="search" placeholder="Search Chat" />
                    <button onClick={() => setShowUsersList(!showUsersList)} className="text-xl font-semibold ml-3">
                        +
                    </button>
                </div>
                <ul className="overflow-auto h-[calc(100vh-3.5rem)]">
                    {getUsersWithMessages().map(user => (
                        <li key={user.id} className={`p-3 cursor-pointer ${activeUser.id === user.id ? 'bg-green-500 text-white' : ''}`} onClick={() => setActiveUser(user)}>
                            {user.name}
                            <span className="block text-gray-600 text-sm">{user.role}</span>
                        </li>
                    ))}
                    {showUsersList && users.filter(user => !getUsersWithMessages().includes(user)).map(user => (
                        <li key={user.id} className="p-3 cursor-pointer" onClick={() => setActiveUser(user)}>
                            {user.name}
                            <span className="block text-gray-600 text-sm">{user.role}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Chat window */}
            <div className="flex-grow flex flex-col">
                {/* Header */}
                <div className="p-3 shadow-md bg-green-500 text-white">
                    <h3 className="font-semibold">{activeUser.name}</h3>
                </div>

                {/* Messages list */}
                <div className="flex-grow overflow-auto">
                    {messages.map(message => (
                        <div key={message.id} className="flex justify-end p-2">
                            <div className="bg-green-300 rounded-lg p-2 max-w-xs lg:max-w-md">
                                <p className="text-sm">{message.text}</p>
                                <div className="text-right text-xs text-gray-600">{message.timestamp}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Message input */}
                <div className="p-3 shadow-md">
                    <div className="flex gap-2">
                        <input
                            className="border-2 border-gray-300 bg-white h-15 px-5 rounded-lg text-sm focus:outline-none w-full"
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type Message"
                        />

                        <button
                            onClick={sendMessage}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;
