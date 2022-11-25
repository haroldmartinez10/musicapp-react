import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Badbunny from './components/ArtistsComponents/BadBunny/Badbunny'
import ComponentHomeContext from './context/ComponentHomeContext'
import Aboutbadbunny from './components/ArtistsComponents/BadBunny/Aboutbadbunny'
import ContextBadBunny from './context/ContextBadBunny/ContextBadBunnyComponent'
import ContextShakira from './context/ContextShakira/ContextShakiraComponent'
import Shakira from './components/ArtistsComponents/Shakira/Shakira'
import Aboutshakira from './components/ArtistsComponents/Shakira/Aboutshakira'
import LanaDelRey from './components/ArtistsComponents/LanaDelRey/LanaDelRey'
import ContextLanaDelRey from './context/ConextLana/ContextLanaDelReyComponent'
import AboutLanadelrey from './components/ArtistsComponents/LanaDelRey/Aboutlanadelrey'
import ArticMonkeys from './components/ArtistsComponents/ArticMonkeys/ArticMonkeys'
import ContextArticMonkeys from './context/ContextArticMonkeys/ContextArticMonkeys'
import AboutArticMonkeys from './components/ArtistsComponents/ArticMonkeys/Aboutarticmonkeys'
import ContextAdele from './context/ContextAdele/ContextAdele'
import Aboutadele from './components/ArtistsComponents/Adele/Aboutadele'
import Adele from './components/ArtistsComponents/Adele/Adele'
import ContextJustinBieber from './context/ContextJustinBieber/ContextJustinBieber'
import JustinBieber from './components/ArtistsComponents/JustinBieber/JustinBieber'
import Aboutjustinbieber from './components/ArtistsComponents/JustinBieber/Aboutjustinbieber'




const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={
          <ComponentHomeContext>
            <Home />
          </ComponentHomeContext>
        } />


        <Route path='/BadBunny' element={
          <ContextBadBunny>
            <Badbunny />
          </ContextBadBunny>}>
        </Route>
        <Route path='/BadBunny/AboutBadBunny' element={
          <ContextBadBunny>
            <Aboutbadbunny />
          </ContextBadBunny>}>
        </Route>

        <Route path='/Shakira' element={
          <ContextShakira>
            <Shakira />
          </ContextShakira>}>
        </Route>
        <Route path='/Shakira/AboutShakira' element={
          <ContextBadBunny>
            <Aboutshakira />
          </ContextBadBunny>}>
        </Route>


        <Route path='/LanaDelRey' element={
          <ContextLanaDelRey>
            <LanaDelRey />
          </ContextLanaDelRey>}>
        </Route>
        <Route path='/LanaDelRey/AboutLanaDelRey' element={
          <ContextLanaDelRey>
            <AboutLanadelrey />
          </ContextLanaDelRey>}>
        </Route>


        <Route path='/ArticMonkeys' element={
          <ContextArticMonkeys>
            <ArticMonkeys />
          </ContextArticMonkeys>}>
        </Route>
        <Route path='/ArticMonkeys/AboutArticMonkeys' element={
          <ContextArticMonkeys>
            <AboutArticMonkeys />
          </ContextArticMonkeys>}>
        </Route>

        <Route path='/Adele' element={
          <ContextAdele>
            <Adele />
          </ContextAdele>}>
        </Route>
        <Route path='/Adele/AboutAdele' element={
          <ContextAdele>
            <Aboutadele />
          </ContextAdele>}>
        </Route>


        <Route path='/JustinBieber' element={
          <ContextJustinBieber>
            <JustinBieber />
          </ContextJustinBieber>}>
        </Route>

        <Route path='/JustinBieber/AboutJustinBieber' element={
          <ContextJustinBieber>
            <Aboutjustinbieber />
          </ContextJustinBieber>}>
        </Route>












      </Routes>

    </>
  )
}

export default App