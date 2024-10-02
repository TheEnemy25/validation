import React from 'react';
import CloseIcon from '../../assets/svg/CloseIcon';

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-[24px] p-[24px] w-[670px] mx-auto flex flex-col">
                <button onClick={onClose} className="flex justify-end">
                    <CloseIcon />
                </button>
                <h1 className="font-poppins font-bold text-[48px] text-center mb-[50px]">{title}</h1>
                {children}
            </div>
        </div>
    );
};

export default AuthModal;
