import React from 'react'
import { createContext } from 'react'
import imgBadBunny from '../../src/imageshome/badbunny.jpg'
import imgShakira from '../../src/imageshome/shakira.jpg'
import imgLana from '../../src/imageshome/lanadelrey.jpg'
import imgArticMonkeys from '../../src/imageshome/articmonkeys.jpeg'
import imgAdele from '../../src/imageshome/adele.jpg'
import imgJustinBieber from '../../src/imageshome/justin.jpg'

const ComponentHomeContext = (props) => {


    const artists = [
        { name: 'Bad Bunny', id: 1, url: '/BadBunny', image: imgBadBunny, },
        { name: 'Shakira', id: 2, url: '/Shakira', image: imgShakira, },
        { name: 'Lana Del Rey', id: 3, url: '/LanaDelRey', image: imgLana, },
        { name: 'Artic Monkeys', id: 4, url: '/ArticMonkeys', image: imgArticMonkeys },
        { name: 'Adele', id: 5, url: '/Adele', image: imgAdele },
        { name: 'Justin Bieber', id: 6, url: '/JustinBieber', image: imgJustinBieber },

    ]
    // { name: 'Artic Monkeys', id: 4, url: '/ArticMonkeys', image: imgArticMonkeys, },
    //{ name: 'Adele', id: 5, url: '/Adele', image: imgAdele, },
    //{ name: 'Justin Bieber', id: 6, url: '/JustinBieber', image: imgJustinBieber, },


    return (
        <HomeContext.Provider value={{ artists }}>
            {props.children}
        </HomeContext.Provider>
    )
}

export default ComponentHomeContext
export const HomeContext = createContext()
