import {BrowserRouter, Routes, Route} from 'react-router-dom';
import GoKartViewer from './components/GoKart/GoKartViewer';
import MurphyViewer from './components/Murphy/MurphyViewer';
import Layout from './components/Layout/Layout';

const App = () => {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>} />
        <Route path='/goKart' element={<GoKartViewer />} />
        <Route path='/murphy' element={<MurphyViewer/>} />
      </Routes>
      </BrowserRouter>
  )
}

export default App
