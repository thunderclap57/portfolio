import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios'
const About = () => {
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
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>{`Hi. I'm ${user.name}, nice to meet you. Please take a look around.`}</p>
            </div>
            <div>
              <p>I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
