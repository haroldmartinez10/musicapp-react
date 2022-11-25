import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ArtistDivContainer from '../../styledcomponents/DivArtists/ArtistDivContainer'
import { ContextArticMonkeys } from '../../../context/ContextArticMonkeys/ContextArticMonkeys'
import { useContext } from 'react'


const Aboutarticmonkeys = () => {

    const { setIsPlaying } = useContext(ContextArticMonkeys)

    return (
        <><div onClick={() => setIsPlaying(true)} className="flex p-4 bg-[#978C8C]  w-12/12 lg:w-[980px] lg:mx-auto ">
            <Link to='/ArticMonkeys'> <motion.h1 initial={{ opacity: 0, scale: 0.5 }}
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
                        <h1 className='text-white font-extrabold leading-3  text-xs text-center mt-2 w-12/12 lg:w-12/12 '>ABOUT: ARTIC MONKEYS</h1>
                        <p className='text-white font-extralight leading-8 px-3 text-base mt-2 w-12/12 lg:w-12/12 text-center  mx-auto '>
                            Arctic Monkeys are an English rock band formed in Sheffield in 2002. The group consists of Alex Turner (lead vocals, guitar, keyboards), Jamie Cook (guitar, keyboards), Nick O'Malley (bass guitar, backing vocals), and Matt Helders (drums, backing vocals). Former band member Andy Nicholson (bass guitar, backing vocals) left the band in 2006 shortly after their debut album was released.

                            Arctic Monkeys were heralded as one of the first bands to come to public attention via the Internet, with commentators suggesting they represented the possibility of a change in the way in which new bands are promoted and marketed.Their debut album, Whatever People Say I Am, That's What I'm Not (2006), became the fastest-selling debut album in UK chart history, and has been hailed as one of the greatest debut albums.It won Best British Album at the 2007 Brit Awards. The band's second album, Favourite Worst Nightmare (2007), was also acclaimed by critics and won Best British Album at the 2008 BRIT Awards. They went on to release Humbug (2009) and Suck It and See (2011).
                        </p>
                    </motion.div>



                </div>
            </ArtistDivContainer>
        </>
    )
}

export default Aboutarticmonkeys