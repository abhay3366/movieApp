

import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import SingelMovie from './SingelMovie'

function App() {
 

  return (
    <div className="App">
      <Routes>
       <Route path='/' element={<Home/>} />
       <Route path="movie/:id" element={<SingelMovie/>}/> 
       <Route path="*" element={<Error/>}/>
      </Routes>
    </div>
  )
}

export default App
