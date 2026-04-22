import {Routes, Route} from 'react-router-dom';
import Homepage from './Homepage';
import Military from './Military';
import Army from './Army';
import Navy from './Navy';
import AirForce from './AirForce';
import MND from './MND';
import MOTC from './MOTC';
import CBOC from "./CBOC";
import PWD from './PWD';
import TGD from './taipeiGarrison';
import HRB from './HRB';
import Logistics from './Logistics';
import CFL from './CFL';
import TSC from './TSC';
import Taipower from './Taipower';
import Taibao from './taibao';
import Lin from './lin-family';
import Gu from './gu-family';
import Yang from './yang-family';
import MOI from './MOI';


const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/military" element={<Military />}/>
        <Route path="/army" element={<Army/>}/>
        <Route path="/navy" element={<Navy/>}/>
        <Route path="/air-force" element={<AirForce/>}/>
        <Route path="/taipei-garrison" element={<TGD/>}/>
        <Route path="historical-records-bureau" element={<HRB/>}/>
        <Route path="logistics-department" element={<Logistics/>}/>
        <Route path="/MND" element={<MND />}/>
        <Route path='/MOTC' element={<MOTC/>}/>
        <Route path='/MOI' element={<MOI/>}/>
        <Route path='/central-bank-of-china' element={<CBOC/>}/>
        <Route path='/PWD' element={<PWD/>}/>

        <Route path='/chinese-federation-of-labour' element={<CFL/>}/>
        <Route path='/taiwan-shipbuilding-corporation' element={<TSC/>}/>
        <Route path='/taipower' element={<Taipower/>}/>
        <Route path='/taibao' element={<Taibao/>}/>
        <Route path='/lin-family' element={<Lin/>}/>
        <Route path='/gu-family' element={<Gu/>}/>
        <Route path='/yang-family' element={<Yang/>}/>
      </Routes>
    </>
  )
}

export default App
