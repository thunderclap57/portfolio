import React, { useEffect, useState } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { useLocation } from 'react-router-dom';
import axios from 'axios'
const Home = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userId = searchParams.get('userid');
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



  })
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
        {user.name}
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Full Stack Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
