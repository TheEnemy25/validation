import React, { useState } from 'react';
import { itemsData } from '../../const/data';
import Card from './Card';
import backgroundImage from '../../assets/images/background (1).png';

const CardList: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className={`mt-[120px] ${isModalOpen ? 'backdrop-blur' : ''}`} style={{ backgroundImage: `url(${backgroundImage})` }}>
            <h1 className='mb-[16px] font-bold text-[50px] font-poppins leading-[60px]'>Our Values</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {itemsData.map((item) => (
                    <Card key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default CardList;
