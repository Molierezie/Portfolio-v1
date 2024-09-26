
// import { Outlet } from 'react-router-dom'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Header from './pages/Header'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import Contact from './pages/Contact'

// import NotFound from './pages/NotFound'

import './App.css'

function App() {


  return (


    // background: linear-gradient(to right, #ffefba, #ffffff); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


    // <main className='bg-[linear-gradient(to_left,_#603813,_#b29f94,_#ffd89b)] bg-no-repeat overflow-hidden sm:bg-yellow-300 md:bg-red-400 lg:bg-blue-500 border-x-lime-500  '>

    // #eacda3, #d6ae7b
    // #70e1f5, #ffd194
    // background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);
    // background-image: linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%);
    // background-image: linear-gradient(-225deg, #7DE2FC 0%, #B9B6E5 100%);
    // background-image: linear-gradient(to top, #3b41c5 0%, #a981bb 49%, #ffc8a9 100%);
    // background-image: linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%);
    // background: linear-gradient(to right, #ada996, #f2f2f2, #dbdbdb, #eaeaea); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


<main className='bg-[linear-gradient(to_top,_#a981bb_49%,_#ffc8a9_100%)] bg-no-repeat overflow-hidden'>

{/* <main className=' sm:bg-yellow-300 md:bg-red-400 lg:bg-blue-500 border-x-lime-500  '> */}

      <ToastContainer />
    
      <Header />
      <Home />
      <Nav />
      <About />
      <Work />
      <Contact />
    
      {/* <div className='h-[4000px]'></div>  */}
      
   

      {/* <Outlet /> */}

    </main>

  )
}

export default App
