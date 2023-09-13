import { useState } from 'react'
import './App.css'
import Blogs from './component/Blogs/Blogs'
import Bookmarks from './component/Bookmarks/Bookmarks'
import Header from './component/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleBookmark = blog => {
    console.log('click bookmark');
  }
  return (
    <>
      <Header></Header>
      <div className='md:flex justify-between max-w-7xl mx-auto'>
      <Blogs handleBookmark={handleBookmark}></Blogs>
      <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
