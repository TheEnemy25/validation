import React from 'react';
import CloseIcon from '../../assets/svg/CloseIcon';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    description: string;
    imageUrl: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, description, imageUrl }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-[24px] max-w-[500px] mx-auto flex flex-col">
                <button onClick={onClose} className="flex justify-end">
                    <CloseIcon />
                </button>
                <div>
                    <h1 className="font-poppins font-bold text-[32px] mb-[24px]">{title}</h1>
                    <img src={imageUrl} alt={title} className="w-full h-[200px] object-cover mb-[24px]" />
                    <p className="font-poppins font-regular leading-[21px] text-[14px]">{description}</p>
                </div>
            </div >
        </div >
    );
};

export default Modal;
