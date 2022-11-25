import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
import ArtistDivContainer from '../../styledcomponents/DivArtists/ArtistDivContainer'
import { ContextJustinBieber } from '../../../context/ContextJustinBieber/ContextJustinBieber'
import { useContext } from 'react'


const Aboutjustinbieber = () => {

    const { setIsPlaying } = useContext(ContextJustinBieber)

    return (
        <><div onClick={() => setIsPlaying(true)} className="flex p-4 bg-[#978C8C]  w-12/12 lg:w-[980px] lg:mx-auto ">
            <Link to='/JustinBieber'> <motion.h1 initial={{ opacity: 0, scale: 0.5 }}
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
                        <h1 className='text-white font-extrabold leading-3  text-xs text-center mt-2 w-12/12 lg:w-12/12 '>ABOUT: JUSTIN BIEBER</h1>
                        <p className='text-white font-extralight leading-8 px-3 text-base mt-2 w-12/12 lg:w-12/12 text-center  mx-auto '>
                            Justin Drew Bieber (born March 1, 1994)is a Canadian singer. Bieber is recognized for his genre-melding musicianship and has played an influential role in modern-day popular music.He was discovered by American record executive Scooter Braun and signed with RBMG Records in 2008, gaining recognition with the release of his debut seven-track EP My World (2009) and soon establishing himself as a teen idol.

                            Bieber achieved commercial success with his teen pop-driven debut studio album, My World 2.0 (2010), which debuted atop the US Billboard 200, making him the youngest solo male act to top the chart in 47 years.The album spawned the internationally successful single "Baby", which became one of the highest certified singles of all time in the US.His second studio album, Under the Mistletoe (2011), became the first Christmas album by a male artist to debut at number one in the US.Bieber experimented with dance-pop in his third studio album, Believe (2012), and went on to become the first artist in history with five US number-one albums at age 18. Between 2013 and 2014, Bieber was involved in multiple controversies and legal issues, which had a drastic impact on his public image.

                            In 2015, Bieber explored EDM with the release of "Where Are Ü Now", which won the Grammy Award for Best Dance/Electronic Recording.The song's musical direction played an instrumental role in his fourth studio album, Purpose, which produced three US number-one singles: "Love Yourself", "Sorry", and "What Do You Mean?". He became the first artist in history to occupy the entire top three of the UK Singles Chart.Bieber diversified on numerous collaborations between 2016 and 2017, including "I'm the One" and his remix to "Despacito" — both reaching number one on the US Billboard Hot 100 a week apart, making him the first artist in history to chart new number-one songs in consecutive weeks."Despacito" was named the greatest Latin song of all time by Billboard and earned Bieber his career-first Latin Grammy Award. In 2019, he released a country collaboration with Dan + Shay, "10,000 Hours", which won the Grammy Award for Best Country Duo/Group Performance.
                        </p>
                    </motion.div>



                </div>
            </ArtistDivContainer>
        </>
    )
}

export default Aboutjustinbieber