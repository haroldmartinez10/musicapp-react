import React from 'react'
import { useRef } from 'react'
import { createContext } from 'react'
import { useState } from 'react'
import songsData from '../../../public/data artists/songsDataLanaDelRey'

const ContextLanaDelReyComponent = (props) => {

    const [songs, setSongs] = useState(songsData)
    const [isPlaying, setIsPlaying] = useState(true)
    const [nextPrevSong, setNextPrevSong] = useState(0)
    const [currentSong, setCurrentSong] = useState(songs[0])
    const audioElem = useRef()

    return (
        <ContextLanaDelRey.Provider value={{
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
        </ContextLanaDelRey.Provider>
    )
}

export default ContextLanaDelReyComponent;
export const ContextLanaDelRey = createContext()