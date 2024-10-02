import React from 'react';
import image from "../../assets/images/image 54.png"
import CardList from '../card/CardList';
import FingeronStars from "../../assets/images/image 54 (1).png"
import JavaVsPHP from "../../assets/images/image 55.png"
import q from "../../assets/images/image 55 (2).png"
import { Link } from 'react-router-dom';
import AppendDots from '../SliderComponent/AppendDots';

const MainPage = () => {
  return (
    <main className="container mx-auto pt-8 pb-[100px]">
      <section className="flex flex-row justify-between">
        <div className='w-[550px]'>
          <p className="text-[#616161] text-[16px] mb-[27px]">Xceed Blog</p>
          <h1 className="text-5xl font-bold mb-[24px] font-poppins leading-[60px]">10 Web Design Mistakes and How to Avoid Them</h1>
          <div className="font-source-sans font-regular mb-4 leading-[30px]">
            <p className='text-xl mb-[24px]'>Looking for more daily inspiration? Download Muzli extension—your go-to source for discovering design ideas from world’s top creators!</p>
            <p className="text-[#6F7070] text-sm">13.06, 2024 · 2:15 PM · <Link to="/" className='underline'>medium.muz.li</Link></p>
          </div>
        </div>

        <div className="flex">
          <img
            src={image}
            alt=""
            className="w-full max-w-2xl shadow-lg"
          />
        </div>
      </section>

      <section className="mt-[120px]">
        <h1 className='font-bold mb-[48px] text-[50px] font-poppins leading-[60px]'>Latest posts</h1>
        <article className='flex flex-row px-[220px]'>
          <div className='w-[460px] mr-[50px]'>
            <h1 className='font-bold mb-[24px] text-[32px] font-poppins leading-[38px]'>5 popular Rust web frameworks—which one is right for you?</h1>
            <p className='font-poppins font-regular text-[22px]leading-[30px]'>From the simplicity of Poem to the full-featured speed of Actix, there's a Rust web framework for most every user and need.</p>
          </div>
          <div>
            <img
              src={FingeronStars}
              alt=""
            />
          </div>
        </article>

        <article className='flex flex-row px-[220px] mt-[48px]'>
          <div className="w-[460px] h-[230px] mr-[50px]">
            <img
              src={JavaVsPHP}
              alt=""
            />
          </div>

          <div className='w-[450px]'>
            <h1 className='font-bold mb-[24px] text-[32px] font-poppins leading-[38px]'>JAVA VS PHP: WHICH LANGUAGE TO CHOOSE?</h1>
            <p className='font-poppins font-regular text-[22px]leading-[30px]'>Choosing a programming language can be a major hurdle due to people lacking the necessary information to make the right decision.</p>
          </div>
          <div>

          </div>
        </article>

        <article className='flex flex-row px-[220px] mt-[48px]'>
          <div className='w-[460px] mr-[50px]'>
            <h1 className='font-bold mb-[24px] text-[32px] font-poppins leading-[38px]'>Dive into the world of an iOS Developer – career, salary, and skills</h1>
            <p className='font-poppins font-regular text-[22px]leading-[30px]'>When it comes to developing iOS applications, there are two main programming languages that professionals use: Objective-C and Swift. Objective-C is a C language that has additional object-oriented design. </p>
          </div>
          <div className='w-[450px] h-[290px]'>
            <img
              src={q}
              alt=""
              className='w-[450px] h-[290px] object-cover rounded-[16px]'
            />
          </div>
        </article>
      </section>

      <section>
        <CardList />
      </section>

      <section className='mt-[110px] '>
        <AppendDots />
      </section>
    </main>
  );
};

export default MainPage;
