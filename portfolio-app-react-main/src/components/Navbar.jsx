import React, { useEffect, useState } from 'react';
import axios from 'axios'
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [user,setUser] = useState( {
    userId:'',
    name: '',
    email: '',
    phone: '',
    dob: '',
    image: '',
    awards: '',
    linkedIn: '',
    indeed: '',
    certifications: '',
    gitHub: '',
    hackerRank: '',
    skills: {
      skill1: '',
      skill2: '',
      skill3: '',
      skill4: '',
      skill5: '',
      skill6: '',
    },
    education: {
      Primary: {
        Institution_name: '',
        Year_of_pass: '',
        Score: '',
      },
      Higher: {
        Institution_name: '',
        Year_of_pass: '',
        Score: '',
      },
      UG: {
        Institution_name: '',
        Year_of_pass: '',
        Score: '',
      },
      PG: {
        Institution_name: '',
        Year_of_pass: '',
        Score: '',
      },
    },
    languages_known: {
      language1: '',
      language2: '',
      language3: '',
      language4: '',
    },
    references: [
      {
        name: '',
        contact: '',
      },
    ],
    projects: [
      {
        name: '',
      },
    ],
  });
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const getDetails =()=>{
    axios
     .post("https://nutty-buckle-wasp.cyclic.app/user/getDetails", {
       userId:'6447f13483fe0a158be28e03',
     }).then((response) => {

   setUser(response.data);
   console.log(user)
   
   console.log(user.gitHub)
     })
     .catch((err) => {
   
     });}
  useEffect(()=>{

getDetails();



  },[])
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={Logo} alt='Logo Image' style={{ width: '200px' }} />
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li>
          <Link to='home'>
            Home
          </Link>
        </li>
        <li>
          <Link to='about'>
            About
          </Link>
        </li>
        <li>
          <Link to='skills'>
            Skills
          </Link>
        </li>
        <li>
          <Link to='work'>
            Work
          </Link>
        </li>
        <li>
          <Link to='contact'>
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
          <Link onClick={handleClick} to='home'>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about'>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills'>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work'>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact'>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href={`https://${user.gitHub}`}
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href={`https://${user.email}`}
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
         
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
