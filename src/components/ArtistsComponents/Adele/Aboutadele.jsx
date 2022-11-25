import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ArtistDivContainer from '../../styledcomponents/DivArtists/ArtistDivContainer'
import { ContextAdele } from '../../../context/ContextAdele/ContextAdele'
import { useContext } from 'react'


const Aboutadele = () => {

    const { setIsPlaying } = useContext(ContextAdele)

    return (
        <><div onClick={() => setIsPlaying(true)} className="flex p-4 bg-[#978C8C]  w-12/12 lg:w-[980px] lg:mx-auto ">
            <Link to='/Adele'> <motion.h1 initial={{ opacity: 0, scale: 0.5 }}
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
                        <h1 className='text-white font-extrabold leading-3  text-xs text-center mt-2 w-12/12 lg:w-12/12 '>ABOUT: ADELE</h1>
                        <p className='text-white font-extralight leading-8 px-3 text-base mt-2 w-12/12 lg:w-12/12 text-center  mx-auto '>
                            Adele Laurie Blue Adkins MBE (/əˈdɛl/, [əˈdɛw];[3] born 5 May 1988) is an English singer and songwriter. After graduating in arts from the BRIT School in 2006, Adele signed a record deal with XL Recordings. Her debut album, 19, was released in 2008 and spawned the UK top-five singles "Chasing Pavements" and "Make You Feel My Love". The album was certified 8× platinum in the UK and triple platinum in the US. Adele was honoured with the Brit Award for Rising Star as well as the Grammy Award for Best New Artist.

                            Adele released her second studio album, 21, in 2011. It became the world's best-selling album of the 21st century, with sales of over 31 million copies. It was certified 18× platinum in the UK (the highest by a solo artist of all time) and Diamond in the US. According to Billboard, 21 is the top-performing album in the US chart history, topping the Billboard 200 for 24 weeks (the longest for a female artist ever). She was the first female artist in the history of the Billboard Hot 100 to have three simultaneous top-ten singles as a lead artist, with "Rolling in the Deep", "Someone Like You", and "Set Fire to the Rain", all of which also topped the chart. The album received a record-tying six Grammy Awards, including Album of the Year, and the Brit Award for British Album of the Year. The success of 21 earned Adele numerous mentions in the Guinness Book of Records.
                        </p>
                    </motion.div>



                </div>
            </ArtistDivContainer>
        </>
    )
}

export default Aboutadele