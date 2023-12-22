import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Stream from './Pages/Stream'
import NotFound from './Pages/NotFound'
const App = () => {
  return (
    <Routes>
      <Route path='/' index element={<Home/>}/>
      <Route path='stream' element={<Stream />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App