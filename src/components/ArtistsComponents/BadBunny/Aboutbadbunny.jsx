import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
import ArtistDivContainer from '../../styledcomponents/DivArtists/ArtistDivContainer'
import { ContextBadBunny } from '../../../context/ContextBadBunny/ContextBadBunnyComponent'
import { useContext } from 'react'



const Aboutbadbunny = () => {

    const { setIsPlaying } = useContext(ContextBadBunny)


    return (
        <><div onClick={() => setIsPlaying(true)} className="flex p-4 bg-[#978C8C]  w-12/12 lg:w-[980px] lg:mx-auto ">
            <Link to='/BadBunny'> <motion.h1 initial={{ opacity: 0, scale: 0.5 }}
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
                        <h1 className='text-white font-extrabold leading-3  text-xs text-center mt-2 w-12/12 lg:w-12/12 '>ABOUT: BAD BUNNY</h1>
                        <p className='text-white font-extralight leading-8 px-3 text-base mt-2 w-12/12 lg:w-12/12 text-center  mx-auto '>
                            Benito Antonio Martínez Ocasio (born March 10, 1994), known professionally as Bad Bunny, is a Puerto Rican rapper and singer. His music is defined as Latin trap and reggaeton.
                            He rose to popularity in 2016 with his song "Diles", which led to a deal with
                            Hear This Music. He continued gaining traction with songs such as "Soy Peor"
                            and collaborations with Farruko, Karol G, Ozuna, J Balvin, and more during the next few years.
                            Bad Bunny's second solo album YHLQMDLG released on February 29, 2020 and became the highest charting
                            all-Spanish album, reaching number two on Billboard. It was followed up with the compilation
                            Las que no iban a salir in May. In November, he released his fourth album El Último Tour Del Mundo,
                            combining his reggaeton and Latin trap sound with rock music. The album became the first all-Spanish-language album
                            to reach number one on the Billboard 200. In May 2022, his fifth album Un Verano Sin Ti released, becoming his second number-one
                            U.S. album.
                            2022: Un Verano Sin Ti
                            In January 2022, Bad Bunny was featured in Vogue Magazine for the second time modeling the current season's best bags. In April
                            2022, Sony Pictures announced Bad Bunny as the lead for El Muerto, a film set in Sony's Spider-Man Universe. El Muerto is set to be
                            released on January 12, 2024. In May 6, 2022, Bad Bunny released his fourth (fifth overall) studio album Un Verano Sin Ti which it became
                            commercially successful as it debuted at number one on the Billboard 200 where it stays at that spot for thirteenth non-consecutive weeks.

                            Bad Bunny began his fourth concert tour World's Hottest Tour on August 5, 2022, set to visit fourteen countries of the American continent.
                            On October 4, 2022, the tour became the highest-grossing tour by a Latin artist in history, earning US$232.5 million at the time.Bad Bunny
                            received the most nominations (eight) for the 2022 American Music Awards, including his first for artist of the year.
                        </p>
                    </motion.div>



                </div>
            </ArtistDivContainer>
        </>
    )
}

export default Aboutbadbunny