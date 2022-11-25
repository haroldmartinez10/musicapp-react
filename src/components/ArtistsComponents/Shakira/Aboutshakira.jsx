import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ArtistDivContainer from '../../styledcomponents/DivArtists/ArtistDivContainer'

const Aboutshakira = () => {

    return (
        <><div className="flex p-4 bg-[#978C8C]  w-12/12 lg:w-[980px] lg:mx-auto ">
            <Link to='/Shakira'> <motion.h1 initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 0.2,
                    ease: [0, 0.71, 0.2, 1.01]
                }} className='text-white font-bold leading-3 italic inline-block'>← GO BACK </motion.h1></Link>
        </div>
            <ArtistDivContainer className='mx-auto flex-wrap  lg:flex space-x lg:w-[980px] h-full]'>

                <div className='w-12/12 mt-2 gap-2 mx-2 overflow-y-scroll snap-y rounded-lg scrollbar-hide md:w-6/12 lg:w-12/12 md:mx-auto  '>

                    <motion.div initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 1,
                            delay: 0.2,
                            ease: [0, 0.71, 0.2, 1.01]
                        }} className='w-12/12  border-[#978C8C] rounded-lg overflow-y-auto '>
                        <h1 className='text-white font-extrabold leading-3  text-xs text-center mt-2 w-12/12 lg:w-12/12 '>ABOUT: SHAKIRA</h1>
                        <p className='text-white font-extralight leading-8 px-3 text-base mt-2 w-12/12 lg:w-12/12 text-center  mx-auto '>
                            Shakira Isabel Mebarak Ripoll is a Colombian singer.
                            Born and raised in Barranquilla, she has been referred to as the "Queen of Latin Music" and is noted for her musical versatility.
                            She made her recording debut with Sony Music Colombia at the age of 13. Following the commercial failure of her first two albums, Magia
                            (1991) and Peligro (1993), she rose to prominence in Hispanic countries with her next albums, Pies Descalzos (1995) and Dónde Están los
                            Ladrones? (1998). She entered the English-language market with her fifth album, Laundry Service (2001), which sold over 13 million copies worldwide.
                            Buoyed by the international success of her singles "Whenever, Wherever" and "Underneath Your Clothes", the album propelled her reputation as a
                            leading crossover artist. Broadcast Music, Inc., described Shakira as a "pioneer" who extended the global reach of Latino singers.
                        </p>
                    </motion.div>



                </div>
            </ArtistDivContainer>
        </>
    )
}

export default Aboutshakira