import {Routes, Route} from 'react-router-dom';
import Homepage from './Homepage';
import Military from './Military';
import Army from './Army';
import Navy from './Navy';
import AirForce from './AirForce';
import MND from './MND';
import MOTC from './MOTC';
import PWD from './PWD';

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/military" element={<Military />}/>
        <Route path="/army" element={<Army/>}/>
        <Route path="/navy" element={<Navy/>}/>
        <Route path="/air-force" element={<AirForce/>}/>
        <Route path="/MND" element={<MND />}/>
        <Route path='/MOTC' element={<MOTC/>}/>
        <Route path='/PWD' element={<PWD/>}/>
      </Routes>
    </>
  )
}

export default App
