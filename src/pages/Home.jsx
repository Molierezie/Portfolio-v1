

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TbPointerShare } from "react-icons/tb";


import { TypeAnimation } from 'react-type-animation';




import photo1 from '../assets/photo1.png'

const Home = () => {
  return (


    <main className='section sm:h-[95vh] lg:h-[80vh]  w-full' id='home'>


            <div className='sm:h-[80vh] mx-auto flex  flex-col sm:gap-16 md:mt-[-10rem] lg:mt-[-4rem]  lg:gap-8 justify-center items-center text-black'>


                {/* <h1>Rythme Alternance</h1>
                <p>1 semaine école / 2 semaines entreprise</p> */}

        <div className='flex justify-center items-center text-white/60'>

            
                <TypeAnimation
                sequence={[

                    "Don't just learn",
                    2000,
                    'to code',
                    2000,
                    'learn to think',
                    2000,
                    // 'to think',
                    // 2000
                ]}


                speed={50}
                repeat={Infinity}
                className=' font-Robot uppercase md:text-[1.5rem]'
                
                
                />
            

        </div>

        <div className='flex flex-col justify-center items-center '>

 <h1 className='sm:text-2xl md:text-4xl font-bold  uppercase '>Molière Zie</h1>
                <p className='sm:text-[1rem] md:text-[2rem]  font-Desc '>Développeur Web</p>


        </div>


                <div className='sm:hidden md:block'>

                <img src={photo1} alt="photo de Profile" className='md:w-[25vw] md:h-[30vh] lg:w-[17vw] lg:h-[30vh]' />

                </div>


                <div className='flex justify-center gap-4 items-center sm:w-[60vw]'>


              
                <a href='https://github.com/Molierezie' target='_blank'>
                        <FaGithub href='https://github.com/Molierezie' target='_blank' className='sm:h-[7vh] sm:w-[7vw] cursor-pointer' />
                        </a>
               
                        <a href='https://drive.google.com/file/d/1oVXm6S2FNSQXfO0pwnCRRp9nwFzzqkSu/view?usp=sharing' target='_blank' className='cursor-pointer sm:text-[1rem] md:text-[1.5rem] font-bold text-white'>Mon CV
                        </a>
              


                    <a href='https://www.linkedin.com/in/moli%C3%A8re-zie-b12555173/' target='_blank'>
                        <FaLinkedin className='sm:h-[7vh] sm:w-[7vw] cursor-pointer' target='_blank'/>
                        </a>
                 



                

                </div>


            </div>




    </main>
  )
}

export default Home
