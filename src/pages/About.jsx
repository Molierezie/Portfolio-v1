

import { SiJavascript, SiTypescript, SiCss3, SiReact, SiNodedotjs, SiTailwindcss, SiExpress,  SiMongodb, SiStyledcomponents, SiGit, SiGithub} from "react-icons/si";
import { BsFiletypeScss } from "react-icons/bs";



const About = () => {
  return (
    

    <section className='section flex flex-col'  id='about'>


            <h2 className='sm:relative sm:top-[1rem] md:top-[1rem] lg:mt-[-5rem]  sm:text-[1rem] md:text-[2rem] font-Title font-bold  uppercase text-white'>A propos</h2>

        <div className='sm:h-[100vh] w-full flex flex-col sm:mt-10 md:mt-0 '>
            
             <div className='sm:w-full sm:h-[25vh] flex justify-center items-center'>


             <p className='sm:text-[0.7rem] md:text-[0.7rem] lg:text-[0.8rem] xl:text-[0.9rem] md:mt-[-2.5rem] lg:mt-[-0rem] text-center sm:max-w-[85vw] md:max-w-[75vw] lg:max-w-[60vw] text-white'>
             Développeur web junior, passionné par la création d’applications et l&apos;apprentissage en continu. Après une reconversion réussie, j&apos;ai réalisé plusieurs projets en utilisant des technologies comme le MERN stack et Redux Toolkit, et bien d’autres (vous pouvez découvrir tout cela sur mon GitHub). Tous mes projets sont développés avec une approche mobile first et full responsive. Autodidacte et adaptable, je suis prêt à relever de nouveaux défis et à contribuer à des projets ambitieux tout en apportant une réelle valeur ajoutée à votre équipe. Je serai ravi de discuter avec vous lors d’un futur entretien.
                </p>

             </div>


             <div className=' sm:h-[50vh] md:h-[65vh] md:mt-[-3rem] lg:mt-[-1.5rem] flex flex-col'>


             <h2 className='font-Title font-bold  uppercase text-black mx-auto mt-6 sm:text-[1rem] md:text-[2rem]'>Mes Compétences Techniques</h2>

             <div className=' sm:h-[50vh] sm:w-full  md:h-[65vh] flex flex-col justify-around'>


           <div className=' sm:h-[15vh] md:h-[18vh] sm:mt-[0.5rem] md:mt-[1rem] flex flex-col justify-center items-center'>

                <h2 className='sm:text-[1rem] md:text-[1.2rem] text-white'>Développement & Programmation</h2>

                <div className=' flex sm:gap-2 sm:justify-center md:justify-evenly items-center sm:h-[10vh] md:h-[15vh] w-full '>


                    <div className='flex flex-col justify-center items-center sm:h-[10vh]'>
                    <SiJavascript className='sm:w-[5vw] sm:h-[5vh] md:w-[7vw] md:h-[7vh]' />
                    <p className='sm:text-[0.9rem] md:text-[1.5rem]'>Javascript</p>
                    </div>


                    <div className='flex flex-col justify-center items-center sm:h-[10vh]'>
                    <SiTypescript className='sm:w-[5vw] h-[5vh]  md:w-[7vw] md:h-[7vh]' />
                    <p className='sm:text-[0.9rem] md:text-[1.5rem]'>Typescript</p>
                    </div>
 

                    <div className='flex flex-col justify-center items-center h-[10vh]'>
                    <SiReact className='sm:w-[5vw] h-[5vh]  md:w-[7vw] md:h-[7vh]'/>
                    <p className='sm:text-[0.9rem] md:text-[1.5rem]'>ReactJS</p>
                    </div>

                    <div className='flex flex-col justify-center items-center h-[10vh]'>
                    <SiNodedotjs className='sm:w-[5vw] h-[5vh]  md:w-[7vw] md:h-[7vh]'/>
                    <p className='sm:text-[0.9rem] md:text-[1.5rem]'>NodeJS</p>
                    </div>

                    <div className='flex flex-col justify-center items-center h-[10vh]'>
                    <SiExpress className='sm:w-[5vw] h-[5vh]  md:w-[7vw] md:h-[7vh]'/>
                    <p className='sm:text-[0.9rem] md:text-[1.5rem]'>ExpressJS</p>
                    </div>

                   

                </div>

            </div> 

            <div className=' sm:h-[15vh] md:h-[18vh]  flex flex-col justify-center items-center'>

                <h2 className='sm:text-[1rem] md:text-[1.2rem] text-white'>Style CSS</h2>

                <div className='flex gap-2 sm:justify-center md:justify-evenly items-center sm:h-[10vh] md:h-[15vh] w-full b'>


                    <div className='flex flex-col justify-center items-center h-[10vh]'>
                    <SiCss3 className='sm:w-[5vw] h-[5vh]   md:w-[7vw] md:h-[7vh]' />
                    <p className='sm:text-[0.9rem]] md:text-[1.5rem]'>CSS</p>
                    </div>
                    
                    <div className='flex flex-col justify-center items-center h-[10vh]'>
                    <BsFiletypeScss className='sm:w-[5vw] h-[5vh]   md:w-[7vw] md:h-[7vh]'/>
                    <p className='sm:text-[0.9rem] md:text-[1.5rem]'>SCSS</p>
                    </div>


                    <div className='flex flex-col justify-center items-center h-[10vh]'>
                    <SiTailwindcss className='sm:w-[5vw] h-[5vh]   md:w-[7vw] md:h-[7vh]' />
                    <p className='sm:text-[0.9rem] md:text-[1.5rem]'>Tailwind</p>
                    </div>

                    <div className='flex flex-col justify-center items-center h-[10vh] '>
                    <SiStyledcomponents className='sm:w-[5vw] h-[5vh]   md:w-[7vw] md:h-[7vh]' />
                    <p className='sm:text-[0.9rem] md:text-[1.5rem]'>Styled Components</p>
                    </div>

                </div>

                </div> 

                <div className=' sm:h-[15vh] md:h-[18vh] flex flex-col justify-center items-center'>

                <h2 className='sm:text-[0.9rem]] md:text-[1.2rem] text-white'>Base de donnée & Outils de contrôle</h2>
                <div className='flex gap-2 sm:justify-center items-center md:justify-evenly sm:h-[10vh] md:h-[15vh] w-full '>


                    <div className='flex flex-col justify-center items-center h-[10vh] '>
                    <SiMongodb className='sm:w-[5vw] h-[5vh]   md:w-[7vw] md:h-[7vh]'/>
                    <p className='sm:text-[0.9rem] md:text-[1.5rem]'>MongoDB</p>
                    </div>
                    
                    <div className='flex flex-col justify-center items-center h-[10vh] '>
                    <SiGit className='sm:w-[5vw] h-[5vh]   md:w-[7vw] md:h-[7vh]'/>
                    <p className='sm:text-[0.9rem] md:text-[1.5rem]'>Git</p>
                    </div>


                    <div className='flex flex-col justify-center items-center h-[10vh] '>
                    <SiGithub className='sm:w-[5vw] h-[5vh]   md:w-[7vw] md:h-[7vh]' />
                    <p className='sm:text-[0.9rem] md:text-[1.5rem]'>GitHub</p>
                    </div>


                </div>

                </div> 

             </div>

                
             </div>



           





             <div>


             </div>


        </div>


    </section>
  )
}

export default About