
import { useRef } from 'react'
import emailjs from '@emailjs/browser';

import { FaGithub, FaLinkedin } from "react-icons/fa";

import { toast } from 'react-toastify';



const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_prycv5d', 'template_px5v5bj', form.current, {
          publicKey: 'C39q4wIZHpfZP5-6J',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            toast.success('Message envoyé !');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

  return (
    

    <section className='section w-full ' id='contact'>


        <div className='sm:h-[90vh] sm:w-full '>


                    <div className='h-[8vh] w-full flex justify-center items-center'>

                                <h3 className='sm:text-[1.5rem] md:text-[3rem] font-Title font-bold  uppercase text-white'>Contact</h3>

                    </div>

            <div className='sm:h-[25vh] sm:w-full'>

                    <div className='h-[30vh] sm:w-full  flex sm:flex-col md:flex-row justify-center '>

                        <div className=' md:h-[20vh] md:w-[50%]  flex flex-col justify-center items-center sm:text-[1.2rem] lg:text-[1.6rem]'>

                            <a className='font-Croissant uppercase' href='mailto:molierezie@outlook.fr' >Molierezie@outlook.fr</a>
                            <a className='font-Croissant uppercase'  href='tel:+0614011328' target='_blank'> 06 14 01 13 28</a>
                            <address> Nanterre, 92000</address>
                            <p className='text-[0.7rem] sm:max-w-[60vw] md:max-w-[35vw] text-center'>Mobilité géographique : Ouvert aux déplcaments sur toute la France</p>

                        </div>

                        <div className='h-[20vh] sm:w-full md:w-[50%] flex justify-center gap-4 items-center sm:mt-[-2rem] md:mt-0'>

                        <a href='https://github.com/Molierezie' target='_blank'>
                        <FaGithub href='https://github.com/Molierezie' className='sm:h-[7vh] sm:w-[7vw] cursor-pointer' />
                        </a>
               
                      
                        <a href='https://drive.google.com/file/d/1oVXm6S2FNSQXfO0pwnCRRp9nwFzzqkSu/view?usp=sharing' target='_blank' className='cursor-pointer sm:text-[1rem] md:text-[1.5rem] font-bold text-white'>Mon CV
                        </a>

                  <a href='https://www.linkedin.com/in/moli%C3%A8re-zie-b12555173/' target='_blank'>
                        <FaLinkedin className='sm:h-[7vh] sm:w-[7vw] cursor-pointer' />
                        </a>
                 


                        </div>


                    </div>

            </div>

            



            <div className='sm:h-[55vh]  sm:w-full p-8'>


           

  <div className="sm:h-[30vh] sm:mt-[4rem] md:mt-[-3rem] lg:mt-[-5rem] md:h-[60vh] flex justify-center items-center rounded-none [transition:all_0.2s] hover:scale-[0.98] hover:rounded-[20px]">

    <form ref={form} onSubmit={sendEmail} className="sm:h-[50vh] p-8 sm:w-[90vw] md:h-[60vh] sm:mt-[1rem] md:mt-[-2rem] lg:mt-12 md:w-[60vw] lg:w-[35vw] flex flex-col justify-center sm:gap-4  md:gap-8 [font-family:inherit] pb-[0.4em] bg-[linear-gradient(to_top,_#a981bb_49%,_#ffc8a9_100%)]  rounded-[20px]">
    
      <p className="text-center  text-black text-[1.2em] bg-transparent self-center">Me contacter</p>

      <div className="flex items-center justify-center gap-[0.5em] rounded-[10px] p-[0.2em] border-[none] outline-[none] text-[white] bg-white/70  [box-shadow:inset_2px_5px_10px_rgb(5,_5,_5)]">
        <input required={true}  name="name" placeholder="Nom Prénom" className="bg-none border-[none] outline-[none] w-full text-[#ccd6f6]" type="text" />
      </div>

      <div className="flex items-center justify-center gap-[0.6em] p-[0.2em]  text-[white] bg-white/70  [box-shadow:inset_2px_5px_10px_rgb(5,_5,_5)]">
        <input
          required={true}
          name="email"
          placeholder="Email"
          className=" w-full "
          type="email"
          
        />
      </div>

      <div className="flex items-center justify-center gap-[0.6em] p-[0.2em]  text-[white] bg-white/70 [box-shadow:inset_2px_5px_10px_rgb(5,_5,_5)] ">
        <input
          required={true}
          name="objet"
          placeholder="Objet"
          className=" w-full "
          type="text"
        />
      </div>



      <div className="flex items-center justify-center gap-[0.5em] rounded-[10px] p-[0.2em] border-[none] outline-[none] text-[white] bg-white/70 [box-shadow:inset_2px_5px_10px_rgb(5,_5,_5)]">
        <textarea
          required={true}
          name='message'
          placeholder="Message..."
          cols="30"
          rows="3"
          className="bg-none border-[none] outline-[none] w-full h-15vh] text-[#ccd6f6]"
        ></textarea>
      </div>

      <button type='submit' className="cursor-pointer rounded-[10px] border-[none] bg-transparent text-black  font-bold outline-[1px_solid_#64ffda] [transition:all_ease-in-out_0.3s] hover:[transition:all_ease-in-out_0.3s] hover:cursor-pointer hover:[box-shadow:inset_2px_5px_10px_rgb(5,_5,_5)]">Envoyer</button>
    </form>
  </div>
</div>



            {/* </div> */}


             

        </div>



    </section>
  )
}

export default Contact