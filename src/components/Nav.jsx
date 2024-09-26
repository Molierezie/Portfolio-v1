
import { FiUser } from "react-icons/fi";
import { GrHome } from "react-icons/gr";
import { BsChatSquareText} from "react-icons/bs";
import { GoBriefcase } from "react-icons/go";


import { Link } from 'react-scroll';


const Nav = () => {
  return (


    <nav className='fixed bottom-2 overflow-hidden sm:w-[60vw] lg:w-[40vw] sm:left-[20vw] lg:left-[30vw] z-50'>


      <div className='container mx-auto'>

          <div className='sm:w-full bg-black/20 sm:h-[5vh]  backdrop-blur-2xl rounded-full flex justify-around items-center text-white'>

              <Link 
              to='home'
              activeClass='active'
              spy={true}
              smooth={true}
              offset={-200}
              className='cursor-pointer'
              >

              <GrHome className='sm:w-[3vw] sm:h-[7vh] lg:w-[2vw] lg:h-[3vh]'/>
              
              </Link>

              <Link
               activeClass='active'
               spy={true}
               smooth={true}
                to='about'
                  className='cursor-pointer'
              >

              <FiUser className='sm:w-[3vw] sm:h-[7vh] lg:w-[2vw] lg:h-[3vh]'/>

              </Link>

          


              <Link
               activeClass='active'
               spy={true}
               smooth={true}
               to='work'
                 className='cursor-pointer'
              >

              <GoBriefcase className='sm:w-[3vw] sm:h-[7vh] lg:w-[2vw] lg:h-[3vh]'/>

              </Link>


              <Link
               activeClass='active'
               spy={true}
               smooth={true}
              to='contact'
                className='cursor-pointer'
              >

              <BsChatSquareText className='sm:w-[3vw] sm:h-[7vh] lg:w-[2vw] lg:h-[3vh]'/>

              </Link>








          </div>

         
      
          

      </div>

      


    </nav>
    


      
    
  )
}

export default Nav
