import React from 'react'
import { useRef } from 'react'
import { createContext } from 'react'
import { useState } from 'react'
import songsData from '../../../public/data artists/songsDataShakira'

const ContextShakiraComponent = (props) => {

    const [songs, setSongs] = useState(songsData)
    const [isPlaying, setIsPlaying] = useState(true)
    const [nextPrevSong, setNextPrevSong] = useState(0)
    const [currentSong, setCurrentSong] = useState(songs[0])
    const audioElem = useRef()

    return (
        <ContextShakira.Provider value={{
            songs,
            setSongs,
            isPlaying,
            setIsPlaying,
            currentSong,
            setCurrentSong,
            setNextPrevSong,
            nextPrevSong,
            audioElem
        }}>

            {props.children}

        </ContextShakira.Provider>
    )
}

export default ContextShakiraComponent;
export const ContextShakira = createContext()