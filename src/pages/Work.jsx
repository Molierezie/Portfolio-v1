

import { RiComputerLine } from "react-icons/ri";
import { FaGithub} from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";

import project1 from '/assets/Project1.png'
import project2 from '/assets/Project2.png'


const Work = () => {
  return (


    <section className='section flex flex-col' id='work'>



        <div className='sm:h-[100vh] sm:w-full flex flex-col sm:mt-[-5rem] md:mt-[-3rem] lg:mt-[-2rem]'>


            <div className='h-[20vh] w-full flex justify-center items-center'>

                <h2 className='sm:text-[1rem] md:text-[2rem] font-Title font-bold  uppercase text-white sm:mt-8 md:mt-[-1rem] lg:mt-[-6rem]'>Mes dernières Créations</h2>

            </div>

            <div className='sm:h-[90vh] lg:h-[70vh] sm:gap-14 md:gap-12 sm:mt-[-2rem] md:mt-[-5rem] lg:mt-[-3rem]w-full flex sm:flex-col lg:flex-row justify-center items-center lg:gap-4 '>


                <div className='sm:h-[35vh] lg:h-[70vh]  sm:w-full lg:w-[50vw] sm:flex flex-col justify-center items-center'>

                <h2 className="sm:text-[0.7rem] md:text-[1rem]  font-bold text-center sm:mb-2 lg:mb-6 text-black">
                <span className="text-white">
                Application Web - E-commerce
                    </span> , MERN - Redux Toolkit Query - Tailwind</h2>

                    <img src={project1} alt="project1" className='object-fill sm:h-[28vh] sm:w-[70vw] md:w-[45vw] lg:h-[55vh]  opacity-80 rounded-[2rem]'/>

                    <div className='sm:h-[10vh] sm:w-[80vw] lg:w-[40vw] flex justify-around items-center'>

                        <div className='sm:h-[100%] sm:w-[50%] flex flex-col justify-center items-center text-white/60'>

                        <RiComputerLine className="cursor-pointer sm:w-[5vw] sm:h-[5vh]"/>
                        <a href="https://cartierbymoli-mern.onrender.com" target="_blank"  className='flex md:w-[20vw] lg:w-[15vw]  h-[3vh] cursor-pointer justify-center gap-2 items-center'>
                        <span className="sm:text-[0.7rem] lg:text-[1rem]">Lien Site</span>
                        <FaLocationArrow  size={25} className='cursor-pointer sm:w-[2vw] sm:h-[3vh]'/>
                        </a>

                        </div>

                        <div className=' sm:h-[100%] sm:w-[50%] flex flex-col justify-center items-center text-black/70 '>

                            <FaGithub className="cursor-pointer sm:w-[5vw] sm:h-[5vh]" />

                            <a href="https://github.com/Molierezie/CartierbyMoli-MERN" target="_blank"  className='flex md:w-[20vw] lg:w-[15vw]  h-[3vh] cursor-pointer justify-center gap-2 items-center'>
                        <span className="sm:text-[0.7rem] lg:text-[1rem]">Lien Site</span>
                        <FaLocationArrow  size={25} className='cursor-pointer sm:w-[2vw] sm:h-[3vh]'/>
                        </a>

                         

                        </div>

                    </div>

                </div>

              

                <div className='sm:h-[35vh] lg:h-[70vh]  sm:w-full lg:w-[50vw] sm:flex flex-col justify-center items-center'>
                
                <h2 className="sm:text-[0.7rem] md:text-[1rem]  font-bold text-center sm:mb-2 lg:mb-6 text-black">
                <span className="text-white">
                Site Web - Association
                    </span> , React - Tailwind</h2>
               
                <img src={project2} alt="project1" className='object-fill sm:h-[28vh] sm:w-[70vw] md:w-[45vw] lg:h-[55vh] opacity-80 rounded-[2rem]'/>

                    <div className='sm:h-[10vh] sm:w-[80vw] lg:w-[40vw]  flex justify-around items-center'>

                    <div className='sm:h-[100%] sm:w-[50%] flex flex-col justify-center items-center text-white/70'>


                        <RiComputerLine className="cursor-pointer sm:w-[5vw] sm:h-[5vh]"/>
                        <a href="https://molicharity.netlify.app/" target="_blank"  className='flex md:w-[20vw] lg:w-[15vw]  h-[3vh] cursor-pointer justify-center gap-2 items-center'>
                        <span className="sm:text-[0.7rem] lg:text-[1rem]">Lien Site</span>
                        <FaLocationArrow  size={25} className='cursor-pointer sm:w-[2vw] sm:h-[3vh]'/>
                        </a>


                        </div>

                        <div className=' sm:h-[100%] sm:w-[50%] flex flex-col justify-center items-center text-black/70 '>

                        <FaGithub className="cursor-pointer sm:w-[5vw] sm:h-[5vh]" />

                        <a href="https://github.com/Molierezie/MoliCharity-React-Tailwind" target="_blank"  className='flex md:w-[20vw] lg:w-[15vw]  h-[3vh] cursor-pointer justify-center gap-2 items-center'>
                        <span className="sm:text-[0.7rem] lg:text-[1rem]">Lien GitHub</span>
                        <FaLocationArrow  size={25} className='cursor-pointer sm:w-[2vw] sm:h-[3vh]'/>
                        </a>


                        </div>

                    </div>

                </div>


            </div>



        </div>



    </section>

  )
}

export default Work