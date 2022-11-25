import React from 'react'
import ArtistDivContainer from '../../styledcomponents/DivArtists/ArtistDivContainer'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ContextAdele } from '../../../context/ContextAdele/ContextAdele'
import ListOfSongsAdele from './ListOfSongsAdele'
import { motion } from 'framer-motion'


const Adele = () => {

    const { songs, isPlaying, setIsPlaying, currentSong, setCurrentSong, audioElem } = useContext(ContextAdele)


    const playPause = () => {
        audioElem.current.play()
        setIsPlaying(!isPlaying)
        if (isPlaying) {
            audioElem.current.pause()
        }
    }

    const handleNextSong = () => {

        setIsPlaying(true)

        const index = songs.findIndex(song => song.title === currentSong.title);

        if (index === songs.length - 1) {
            setCurrentSong(songs[0])
        }

        else {
            setCurrentSong(songs[index + 1])
        }
    }

    const handlePrevSong = () => {

        setIsPlaying(false)

        setIsPlaying(true)

        const index = songs.findIndex(song => song.title == currentSong.title);

        if (index === 0) {
            setCurrentSong(songs[songs.length - 1])
        }

        else {
            setCurrentSong(songs[index - 1])
        }



    }

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delayChildren: 0.5
            }
        }
    }

    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
    }

    return (
        <>
            <div className="flex p-4 bg-[#978C8C]  w-12/12 lg:w-[980px] lg:mx-auto">
                <audio src={currentSong.url} ref={audioElem} />
                <Link to='/'> <motion.h1 initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.2,
                        ease: [0, 0.71, 0.2, 1.01]
                    }} className='text-white font-bold leading-3 italic inline-block'>← GO BACK </motion.h1></Link>
            </div>
            <ArtistDivContainer className='mx-auto flex-wrap  lg:flex space-x lg:w-[980px]'>

                <div className='w-12/12 mt-4 gap-2 px-2 w-12/12 md:mx-auto md:w-6/12 lg:w-6/12'>
                    <motion.div
                        className="text-center text-white font-bold leading-3 italic mb-4 text-[10px]"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.4,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}>
                        <Link to='/Adele/AboutAdele'><motion.button onClick={() => setIsPlaying(false)}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}>CLICK HERE TO MORE INFO ABOUT {currentSong.artist.toUpperCase()}</motion.button> </Link>
                    </motion.div>

                    <motion.div variants={container}
                        initial="hidden"
                        animate="show" className='flex justify-center'><motion.img initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.02,
                                ease: [0, 0.71, 0.2, 1.01]
                            }} className='rounded object-cover h-48 w-96' src={currentSong.img} /></motion.div>



                    <h1 className='text-white text-center font-extrabold leading-3 italic text-base mt-4 '>{currentSong.title}</h1>

                    <div className='flex justify-center gap-4 mt-4 w-full'>

                        <button onClick={handlePrevSong}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-white bi bi-skip-start-btn-fill" viewBox="0 0 16 16">
                                <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm9.71-6.907L7 7.028V5.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V8.972l2.71 1.935a.5.5 0 0 0 .79-.407v-5a.5.5 0 0 0-.79-.407z" />
                            </svg>
                        </button>

                        <button onClick={playPause}>{isPlaying === false ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-white bi bi-play-fill" viewBox="0 0 16 16">
                            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                        </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-white bi bi-pause-fill" viewBox="0 0 16 16">
                            <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z" />
                        </svg>}</button>

                        <button onClick={handleNextSong}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-white bi bi-skip-end-btn-fill" viewBox="0 0 16 16">
                            <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407L9.5 8.972V10.5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-1 0v1.528L6.79 5.093z" />
                        </svg>
                        </button>

                    </div>

                    <ListOfSongsAdele />

                </div>

            </ArtistDivContainer >


        </>


    )
}

export default Adele;