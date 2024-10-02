import React, { useState } from 'react';
import { Item } from '../../models/item';
import Modal from './Modal';

interface CardProps {
    item: Item;
}

const Card: React.FC<CardProps> = ({ item }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="p-[1px] bg-gradient-to-r from-[#F367A3] to-[#68D2E1] rounded-xl flex">
            <div className="bg-white shadow-md overflow-hidden p-5  rounded-xl h-full">
                <h1 className="text-[32px] font-bold font-poppins mb-[24px]">{item.title}</h1>
                <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover" />
                <div>
                    <p className="font-source-sans font-regular leading-[21px] my-[24px] text-[16px]">{item.description}</p>
                    <div>
                        <button
                            onClick={openModal}
                            className="bg-black text-white p-4 rounded-[16px] font-bold font-poppins text-[16px] flex w-[135px] text-center items-end justify-center"
                        >
                            View more
                        </button></div>

                </div>
            </div>
            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                title={item.title}
                description={item.description}
                imageUrl={item.imageUrl}
            />
        </div>
    );
};

export default Card;
