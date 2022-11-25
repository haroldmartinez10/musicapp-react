import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
import ArtistDivContainer from '../../styledcomponents/DivArtists/ArtistDivContainer'
import { ContextLanaDelRey } from '../../../context/ConextLana/ContextLanaDelReyComponent'
import { useContext } from 'react'


const Aboutlanadelrey = () => {

  const { setIsPlaying } = useContext(ContextLanaDelRey)

  return (
    <><div onClick={() => setIsPlaying(true)} className="flex p-4 bg-[#978C8C]  w-12/12 lg:w-[980px] lg:mx-auto ">
      <Link to='/LanaDelRey'> <motion.h1 initial={{ opacity: 0, scale: 0.5 }}
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
            <h1 className='text-white font-extrabold leading-3  text-xs text-center mt-2 w-12/12 lg:w-12/12 '>ABOUT: LANA DEL REY</h1>
            <p className='text-white font-extralight leading-8 px-3 text-base mt-2 w-12/12 lg:w-12/12 text-center  mx-auto '>
              Elizabeth Woolridge Grant (born June 21, 1985), known professionally as Lana Del Rey, is an American singer-songwriter. Her music is noted for its cinematic quality and exploration of tragic romance, glamour, and melancholia, with frequent references to contemporary pop culture and 1950s–1960s Americana.She is the recipient of various accolades, including two Brit Awards, two MTV Europe Music Awards, and a Satellite Award, in addition to nominations for six Grammy Awards and a Golden Globe Award.Variety honored her at their Hitmakers Awards for being "one of the most influential singer-songwriters of the 21st century."

              Raised in upstate New York, Del Rey moved to New York City in 2005 to pursue a music career. After numerous projects, including her self-titled
              debut studio album, Del Rey's breakthrough came in 2011 with the viral success of her single "Video Games"; she subsequently signed a recording
              contract with Polydor and Interscope.She achieved critical and commercial success with her second album, Born to Die (2012), which contained
              the sleeper hit "Summertime Sadness". Del Rey's third album, Ultraviolence (2014), featured greater use of guitar-driven instrumentation and debuted
              atop the U.S. Billboard 200. Her fourth and fifth albums, Honeymoon (2015) and Lust for Life (2017), saw a return to the stylistic traditions of her
              earlier releases, while her critically acclaimed sixth album, Norman Fucking Rockwell!
              (2019), explored soft rock.Her next studio albums, Chemtrails over the Country Club and Blue Banisters, followed in 2021.
            </p>
          </motion.div>



        </div>
      </ArtistDivContainer>
    </>
  )
}

export default Aboutlanadelrey