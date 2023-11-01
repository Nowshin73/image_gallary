import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageGallery from './components/ImageGallery'
import Gallery from './components/Gallery'

function App() {
 

  return (
    <>
     <Gallery></Gallery>
     <ImageGallery></ImageGallery>
    </>
  )
}

export default App
