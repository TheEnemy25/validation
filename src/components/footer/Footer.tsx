import Logo from "../../assets/images/Frame 8765.png"
import { Link } from 'react-router-dom';
import BehanceIcon from '../../assets/svg/BehanceIcon';
import DribbbleIcon from '../../assets/svg/DribbbleIcon';
import LinkedInIcon from '../../assets/svg/LinkedInIcon';
import InstagramIcon from '../../assets/svg/InstagramIcon';
import FacebookIcon from '../../assets/svg/FacebookIcon';
import TelegramIcon from '../../assets/svg/TelegramIcon';

const Footer = () => {
    return (
        <footer className='bg-black py-[24px] m-auto flex flex-col'>
            <img src={Logo} alt='' className='m-auto' />
            <div className="flex items-center justify-between w-[480px] my-[32px] mx-auto">
                <Link to="/" className='text-white hover:text-purple-600 cursor-pointer'>Success Stories</Link>
                <Link to="/" className='text-white hover:text-purple-600 cursor-pointer'>Home</Link>
                <Link to="/" className='text-white hover:text-purple-600 cursor-pointer'>Services</Link>
                <Link to="/" className='text-white hover:text-purple-600 cursor-pointer'>Blog</Link>
                <Link to="/" className='text-white hover:text-purple-600 cursor-pointer'>About us</Link>
                <Link to="/" className='text-white hover:text-purple-600 cursor-pointer'>Career</Link>
            </div>
            <div className="flex items-center justify-between w-[255px] my-[32px] mx-auto">
                <Link to=""><DribbbleIcon /></Link>
                <Link to=""><LinkedInIcon /></Link>
                <Link to=""><BehanceIcon /></Link>
                <Link to=""><InstagramIcon /></Link>
                <Link to=""><FacebookIcon /></Link>
                <Link to=""><TelegramIcon /></Link>
            </div>
        </footer>
    );
};

export default Footer;