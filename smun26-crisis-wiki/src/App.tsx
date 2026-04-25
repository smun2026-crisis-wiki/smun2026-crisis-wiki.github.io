import {Routes, Route} from 'react-router-dom';
import Homepage from './Homepage';
import Military from './Military';
import Army from './Army';
import Navy from './Navy';
import AirForce from './AirForce';
import MND from './MND';
import MOTC from './MOTC';
import CBOC from "./CBOC";
import SAJCRR from './SA-JCRR';
import PWD from './PWD';
import TGD from './taipeiGarrison';
import HRB from './HRB';
import Logistics from './Logistics';
import CFL from './CFL';
import CTB from './CTB';
import TSC from './TSC';
import TFC from './TFC';
import TRA from './TRA';
import Taipower from './Taipower';
import Taibao from './taibao';
import Lin from './lin-family';
import Gu from './gu-family';
import Yang from './yang-family';
import MOI from './MOI';
import MOE from './MOE';
import MOEA from './MOEA';



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
        <Route path="/taiwan-railways-administration" element={<TRA/>}/>
        <Route path="/MND" element={<MND />}/>
        <Route path='/MOTC' element={<MOTC/>}/>
        <Route path='/MOI' element={<MOI/>}/>
        <Route path='/MOE' element={<MOE/>}/>
        <Route path='/MOEA' element={<MOEA/>}/>

        <Route path='/central-bank-of-china' element={<CBOC/>}/>
        <Route path='/sino-american-joint-commission-on-rural-reconstruction' element={<SAJCRR/>}/>

        <Route path='/central-trust-bureau' element={<CTB/>}/>

        <Route path='/PWD' element={<PWD/>}/>
        <Route path='/chinese-federation-of-labour' element={<CFL/>}/>
        <Route path='/taiwan-shipbuilding-corporation' element={<TSC/>}/>
        <Route path='/taipower' element={<Taipower/>}/>
        <Route path='/taibao' element={<Taibao/>}/>
        <Route path='/taiwan-fertilizer-company' element={<TFC/>}/>
        <Route path='/lin-family' element={<Lin/>}/>
        <Route path='/gu-family' element={<Gu/>}/>
        <Route path='/yang-family' element={<Yang/>}/>
      </Routes>
    </>
  )
}

export default App
