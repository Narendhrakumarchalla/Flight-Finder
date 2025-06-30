import React from 'react';

const user = {
    name: 'Divya Sharma',
    email: 'divya@example.com',
    avatar: 'https://i.pravatar.cc/150?img=3',
    bio: 'Avid traveler. Love exploring new places and cultures.',
    location: 'Bangalore, India',
    joined: 'January 2023',
};

const ProfilePage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-teal-50 flex justify-center items-center p-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-sm w-full text-center">
                <img
                    src={user.avatar}
                    alt="User Avatar"
                    className="w-24 h-24 rounded-full object-cover mb-4 mx-auto border-4 border-indigo-500"
                />
                <h2 className="text-2xl font-semibold text-slate-800 mb-1">{user.name}</h2>
                <p className="text-slate-500 mb-2">{user.email}</p>
                <p className="text-slate-700 mb-4">{user.bio}</p>
                <div className="flex justify-between text-slate-500 text-sm mt-6">
                    <span className="flex items-center gap-1">📍 {user.location}</span>
                    <span className="flex items-center gap-1">🗓️ Joined {user.joined}</span>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
