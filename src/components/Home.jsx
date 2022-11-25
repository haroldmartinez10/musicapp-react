import React from 'react'
import DivArtist from '../../src/components/styledcomponents/DivArtists/HomeDivArtists.jsx'
import { Link } from 'react-router-dom'
import { HomeContext } from '../context/ComponentHomeContext'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import { RemoveScroll } from 'react-remove-scroll';

const Home = () => {

  const { artists } = useContext(HomeContext)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }



  return (
    <>
      <RemoveScroll>
        <div className=' w-12/12 md:w-12/12  md:max-w-[600px] lg:max-w-[1042px] lg:w-100% xl:w-12/12 mx-auto h-screen mt-5  lg:w-full  '>
          <motion.div variants={container}
            initial="hidden"
            animate="show" className='grid grid-cols-1 gap-2 justify-items-center px-4 max-[385px]:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-4  '>

            {
              artists.map((artist) => (
                <motion.div key={artist.id} variants={item}>
                  <Link to={artist.url}>
                    <DivArtist className="w-[280px]  lg:w-[500px]">
                      <div className='w-6/12 h-[50px] md:h-[100px] lg:h-[200px] text-center '>

                        <motion.img src={artist.image} className='rounded-l border-solid w-full h-full object-cover'></motion.img>
                      </div>
                      <div className='w-6/12 text-center text-white'>
                        <div className='drop-shadow-2xl w-full  '>
                          <motion.h1 whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.2 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            className='font-extrabold leading-3 italic text-white  text-[9px] lg:text-[20px] lg:opacity-50 lg:hover:opacity-100 lg:text-white lg:py-20 text-xs'>{artist.name.toUpperCase()}</motion.h1>
                        </div>
                      </div>
                    </DivArtist>
                  </Link>
                </motion.div>
              ))
            }


          </motion.div>

        </div >
      </RemoveScroll>
    </>

  )
}

export default Home