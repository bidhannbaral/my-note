import React from 'react'
import { HashRouter as Router, Routes, Route} from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Home from './Pages/Home'
import About from './Pages/About'
import Year1 from './Pages/Year1'
import Year2 from './Pages/Year2'
import Year3 from './Pages/Year3'
import Year4 from './Pages/Year4'
import Layout from './Layout'
import Notes from './Pages/Notes'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={ <Layout/> }>
          <Route path="/" element={ <Home/> }/>
          <Route path="/about" element={ <About/> }/>
          <Route path="/year1" element={ <Year1/> }/>
          <Route path="/year2" element={ <Year2/> }/>
          <Route path="/year3" element={ <Year3/> }/>
          <Route path="/year4" element={ <Year4/> }/>
          <Route path="/notes/:courseName" element={<Notes/>} />
        </Route>
      </Routes>
      <Toaster position="top-center" />
    </Router>
    
  )
}

export default App