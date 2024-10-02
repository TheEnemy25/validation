import React, { useState } from 'react';
import Logo from "../../assets/images/Frame 8765.png";
import Person from "../../assets/images/jonas-kakaroto-KIPqvvTOC1s-unsplash 1.png";
import AuthModal from '../AuthModal/AuthModal';
import LogInForm from '../login/LogInForm';
import SignInForm from '../signin/SignInForm';

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({ name: '', avatar: '' });

    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [isSignIn, setIsSignIn] = useState(true);

    const logInUser = () => {
        setUser({
            name: 'Adam Sendler',
            avatar: `${Person}`,
        });
        setIsLoggedIn(true);
        closeAuthModal();
    };

    const logOutUser = () => {
        setUser({ name: '', avatar: '' });
        setIsLoggedIn(false);
    };

    const openAuthModal = (isSignInForm: boolean) => {
        setIsSignIn(isSignInForm);
        setIsAuthModalOpen(true);
    };

    const closeAuthModal = () => {
        setIsAuthModalOpen(false);
    };

    return (
        <header className="flex justify-between items-center px-[80px] bg-white">
            <div className="flex items-center space-x-2">
                <img src={Logo} alt="Company Logo" className="w-[130px] h-[85px]" />
            </div>

            <nav>
                <ul className="flex space-x-[54px] text-black font-source-sans font-semibold text-[14px]">
                    <li className="hover:text-purple-600 cursor-pointer">Home</li>
                    <li className="hover:text-purple-600 cursor-pointer">Success Stories</li>
                    <li className="hover:text-purple-600 cursor-pointer">Services</li>
                    <li className="hover:text-purple-600 cursor-pointer">Blog</li>
                    <li className="hover:text-purple-600 cursor-pointer">About us</li>
                    <li className="hover:text-purple-600 cursor-pointer">Career</li>
                </ul>
            </nav>

            <div className="flex items-center space-x-4">
                {isLoggedIn ? (
                    <div className="flex items-center space-x-3">
                        <img
                            src={user.avatar}
                            alt="User Avatar"
                            className="w-10 h-10 rounded-full"
                        />
                        <span className="text-[14px] font-source-sans font-semibold text-[#1E1E1E]">{user.name}</span>
                        <button
                            onClick={logOutUser}
                            className="text-black underline"
                        >
                            Log Out
                        </button>
                    </div>
                ) : (
                    <div className="flex flex-row">
                        <button
                            onClick={() => openAuthModal(true)}
                            className="text-black underline mr-2"
                        >
                            Sign In
                        </button>
                        <h1 className='mr-2 font-regular'>│</h1>
                        <button
                            onClick={() => openAuthModal(false)}
                            className="text-black underline"
                        >
                            Log In
                        </button>
                    </div>
                )}
            </div>

            <AuthModal isOpen={isAuthModalOpen} onClose={closeAuthModal} title={isSignIn ? "Sign In" : "Log In"}>
                {isSignIn ? (
                    <SignInForm onSuccessfulSignIn={logInUser} />
                ) : (
                    <LogInForm onSuccessfulLogIn={logInUser} />
                )}
            </AuthModal>
        </header>
    );
};

export default Header;
