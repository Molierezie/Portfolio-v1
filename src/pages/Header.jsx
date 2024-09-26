
import { Link } from 'react-scroll'

const Header = () => {
  return (


    <header className='h-[15vh] w-full flex justify-around items-center'>

        <div className='flex flex-col sm:text-2xl md:text-4xl font-Desc'>
            <h2 className='font-bold text-white/50 uppercase'>MZ</h2>
            <p className=''>Dev</p>

        </div>



        <Link to='contact'  className=" drop-shadow-md inline-flex items-center justify-center sm:w-[35vw] sm:h-[8vh] md:w-[20vw] md:h-[5vh] border-[0] relative overflow-hidden rounded-[10rem] [transition:all_0.02s] font-bold cursor-pointer text-white z-0 [box-shadow:0_0px_7px_-5px_rgba(0,_0,_0,_0.5)] hover:bg-white hover:text-[rgb(33,_0,_85)] active:scale-[0.97]">
                    Me contacter
                    <div className="absolute bottom-[0] top-[0] left-[0] right-[0] flex items-center justify-center ">
                        <div className='bg-white bg-[#FFE9BA]/80 rounded-[40rem] w-40 h-40 [transition:0.4s] filter blur-[20px] animate-[effect_infinite_3s_linear] opacity-50 '></div>
                    </div>
        
        </Link>
       


    </header>

  )
}

export default Header


