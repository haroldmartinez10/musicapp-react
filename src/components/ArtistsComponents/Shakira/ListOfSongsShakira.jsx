import { motion } from 'framer-motion'
import React, { useContext } from 'react'
import { useEffect } from 'react'
import { ContextShakira } from '../../../context/ContextShakira/ContextShakiraComponent'


const ListOfSongsShakira = () => {

    const { songs, setIsPlaying, currentSong, setCurrentSong, audioElem } = useContext(ContextShakira)

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delayChildren: 0.3
            }
        }
    }

    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
    }



    const handleId = (id) => {


        setCurrentSong(songs[id])
        if (currentSong.id === id) {
            return
        } else {
            setIsPlaying(false)
        }
        setIsPlaying(true)
    }

    useEffect(() => {

        audioElem.current.play()

    }, [currentSong.id])

    return (
        <>
            <motion.div variants={container}
                initial="hidden"
                animate="show" className="flex flex-col  p-2 bg-[#7c6f6f]  mt-5 lg:w-12/12 lg:mx-auto mb-4 w-12/12">
                <div className='bg-[#978C8C] p-4 flex items-start space-x-4  '>

                    <h1 className='text-white font-extrabold leading-3 text-xs  w-4/12 '>TITLE</h1>
                    <h1 className='text-white font-extrabold leading-3 text-xs w-4/12'>ARTIST</h1>
                    <h1 className='text-white font-extrabold leading-3 text-xs w-4/12'>ALBUM</h1>
                    <h1 className='text-white font-extrabold leading-3 italic w-12/12 text-xs'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-fill invisible" viewBox="0 0 16 16">
                        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                    </svg></h1>

                </div>

                {songs.map((song) => (
                    <motion.div variants={item} key={song.id} className='bg-[#978C8C] p-4 flex items-start space-x-4 mt-2'>
                        <h1 className='text-white font-extrabold leading-3 italic w-4/12 text-xs'>{song.title}</h1>
                        <h1 className='text-white font-extrabold leading-3 italic w-4/12 text-xs'>{song.artist}</h1>
                        <h1 className='text-white font-extrabold leading-3 italic w-4/12 text-xs'>{song.album}</h1>
                        <h1 className='text-white font-extrabold leading-3 italic w-12/12 text-xs'>
                            <button onClick={() => handleId(song.id)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
                                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                            </svg>
                            </button>
                        </h1>
                    </motion.div>
                ))}

            </motion.div>









        </>

    )
}

export default ListOfSongsShakira