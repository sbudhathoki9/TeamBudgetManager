import { SelectedPage } from '@/shared/types';
import Logo from "@/assets/Logo.png";
import PlayersPic from "@/assets/NJNFC_Players.png.jpg";
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  return (
    <section id="home" className="flex flex-col-reverse md:flex-row items-center gap-16 py-16 md:h-screen px-6 md:px-16 bg-background-light">
      
      {/* LEFT SIDE - CLUB INFO */}
      <div className="md:w-1/2 text-center md:text-left">
        {/* Club Name & Tagline */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-text-dark leading-tight">
          Welcome to <span className="text-primary-500">New Jersey Nepali Football Club</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-secondary-500 font-semibold mt-2">
          The Home of Nepali Soccer in New Jersey!
        </h2>

        {/* Club Introduction */}
        <p className="my-5 text-text-light text-lg">
          Passion, teamwork, and excellence! NJNFC is a community-driven football club where Nepali players come together to showcase their talent, celebrate our heritage, and build lifelong friendships. 
        </p>

        <p className="mb-5 text-text-light text-lg">
          Join us to support, play, and experience the spirit of Nepali soccer in New Jersey!
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 mt-5">
          {/* View Players Button */}
          <AnchorLink 
            href={`#players`} 
            onClick={() => setSelectedPage(SelectedPage.Players)}
            className="bg-primary-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-primary-300 transition duration-300 text-center"
          >
            View Players
          </AnchorLink>
          
          {/* View Photos Button */}
          <AnchorLink 
            href={`#photos`} 
            onClick={() => setSelectedPage(SelectedPage.Photos)}
            className="border-2 border-primary-500 text-primary-500 px-6 py-3 rounded-md text-lg font-semibold hover:bg-primary-500 hover:text-white transition duration-300 text-center"
          >
            View Photos
          </AnchorLink>
        </div>
      </div>

      {/* RIGHT SIDE - CLUB IMAGE */}
      <div className="md:w-1/2 flex justify-center">
        <img 
          src={PlayersPic} 
          alt="NJNFC Team"
          className="w-full max-w-md md:max-w-lg rounded-lg shadow-lg"
        />
      </div>

    </section>
  );
};

export default Home;
