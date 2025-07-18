import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import NewsBoard from './Components/NewsBoard'
import Footer from './Components/Footer'

const App = () => {
  const [category, setcategory] = useState("general")
  return (
    <>
    <div className="bg-black">
        <Navbar setcategory={setcategory}/>
        <NewsBoard category={category}/>
        <Footer></Footer>
        </div>
    </>
  )
}

export default App
