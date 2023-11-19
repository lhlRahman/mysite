import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
      <h1 className="text-4xl font-extrabold text-gray-300 hover:text-red-900 ">
        Habib
      </h1>
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li className='mr-4'>
          <Link to='home' smooth={true} duration={500} className="hover:text-red-900">
            Home
          </Link>
        </li>
        <li className='mr-4'>
          <Link to='about' smooth={true} duration={500} className="hover:text-red-900">
            About
          </Link>
        </li>
        <li className='mr-4'>
          <Link to='skills' smooth={true} duration={500} className="hover:text-red-900">
            Skills
          </Link>
        </li>
        <li className='mr-4'>
          <Link to='work' smooth={true} duration={500} className="hover:text-red-900">
            Projects
          </Link>
        </li>
        <li className='mr-4'>
          <Link to='contact' smooth={true} duration={500} className="hover:text-red-900">
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500} className="hover:text-red-900">
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500} className="hover:text-red-900">
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500} className="hover:text-red-900">
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500} className="hover:text-red-900">
            Projects
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500} className="hover:text-red-900">
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[170px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[0px] duration-300 bg-blue-600'>
            <a
              className='ml-2 flex justify-between items-center w-full text-gray-300 '
              href='https://www.linkedin.com/in/habib-rahman-tmu/'
              target='_blank'
              rel='noreferrer'
            >
              Linkedin <FaLinkedin className='mr-4' size={30} />
            </a>
          </li>
          <li className='w-[170px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[0px] duration-300 bg-[#333333]'>
            <a
              className='ml-2 flex justify-between items-center w-full text-gray-300 '
              href='https://github.com/lhlRahman'
              target='_blank'
              rel='noreferrer'
            >
              GitHub <FaGithub className='mr-4' size={30} />
            </a>
          </li>
          <li className='w-[170px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[0px] duration-300 bg-[#6fc2b0]'>
            <a
              className='ml-2 flex justify-between items-center w-full text-gray-300 '
              href='mailto:habib.rahman@toroontomu.ca'
            >
              Email <HiOutlineMail className='mr-4' size={30} />
            </a>
          </li>
          <li className='w-[170px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[0px] duration-300 bg-[#565f69]'>
            <a
              className='ml-2 flex justify-between items-center w-full text-gray-300 '
              href='https://drive.google.com/file/d/1pkqNRFVA-PwbxB67oY0QhqO55iUzuWdG/view?usp=sharing'
              target='_blank'
              rel='noreferrer'
            >
              Resume <BsFillPersonLinesFill className='mr-4' size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;