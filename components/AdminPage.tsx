import React from 'react';
import { User } from '../types';
import { ChevronLeftIcon, KeyIcon, Trash2Icon } from '../constants';

interface AdminPageProps {
    t: (key: string) => string;
    onNavigate: (page: 'dashboard' | 'profile' | 'admin') => void;
    onDeleteUser: (accountId: string) => void;
    onResetPassword: (accountId: string, newPass: string) => void;
    currentUser: User;
    users: User[];
}

const AdminPage: React.FC<AdminPageProps> = ({ t, onNavigate, onDeleteUser, onResetPassword, currentUser, users }) => {

    const handleDelete = (userToDelete: User) => {
        if (window.confirm(`Are you sure you want to delete user ${userToDelete.name} (${userToDelete.accountId})? This action cannot be undone.`)) {
            onDeleteUser(userToDelete.accountId);
        }
    };

    const handleReset = (userToReset: User) => {
        const newPassword = window.prompt(`Enter a new password for ${userToReset.name} (${userToReset.accountId}):`);
        if (newPassword && newPassword.trim().length >= 6) {
            onResetPassword(userToReset.accountId, newPassword.trim());
        } else if (newPassword !== null) { // User didn't cancel the prompt
            alert("Password must be at least 6 characters long.");
        }
    };

    return (
        <div className="container mx-auto p-4 sm:p-6 lg:p-8">
            <div className="relative mb-6 flex items-center">
                <button 
                    onClick={() => onNavigate('dashboard')} 
                    className="absolute left-0 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#2A2A2A]"
                    aria-label={t('back')}
                >
                    <ChevronLeftIcon className="w-6 h-6" />
                </button>
                <h1 className="font-poppins text-2xl font-bold text-center w-full text-[#2C2C2C] dark:text-white">{t('adminPanel')}</h1>
            </div>
            <div className="max-w-4xl mx-auto">
                <div className="bg-white dark:bg-[#2A2A2A] rounded-lg shadow-sm">
                    <ul className="divide-y divide-gray-200 dark:divide-[#4A4A4A]">
                        {users.map(user => (
                            <li key={user.accountId} className="p-4 flex items-center">
                                <div className="flex items-center space-x-4 flex-grow">
                                    <img src={user.avatar} alt={user.name} className="w-12 h-12 rounded-full" />
                                    <div>
                                        <p className="font-semibold text-[#2C2C2C] dark:text-white">{user.name}</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{user.accountId}</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${user.is_admin ? 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300' : 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300'}`}>
                                        {user.is_admin ? 'Admin' : 'User'}
                                    </span>
                                    <div className="flex items-center space-x-2 w-20 justify-end">
                                        {user.accountId !== currentUser.accountId && !user.is_admin && (
                                            <>
                                                <button onClick={() => handleReset(user)} title="Reset Password" className="p-2 rounded-full hover:bg-yellow-100 dark:hover:bg-yellow-900/50 text-yellow-500 transition-colors">
                                                    <KeyIcon className="w-5 h-5" />
                                                </button>
                                                <button onClick={() => handleDelete(user)} title="Delete User" className="p-2 rounded-full hover:bg-red-100 dark:hover:bg-red-900/50 text-red-500 transition-colors">
                                                    <Trash2Icon className="w-5 h-5" />
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AdminPage;
