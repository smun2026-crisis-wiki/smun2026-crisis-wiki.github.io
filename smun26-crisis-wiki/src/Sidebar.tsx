import { useState } from 'react';
import './App.css';


function Sidebar() {
    const [militaryVisible, setMilitaryVisible] = useState(false);
    const [industryVisible, setIndustryVisible] = useState(false);

    return (
        <div className='sidebar'>
            <a href="#/">Homepage</a>
            <a href="#/MOTC">MOTC</a>
            <a href="#/MOI">MOI</a>
            <a href="#/central-bank-of-china">CBOC</a>
            <button onClick={() => setMilitaryVisible(!militaryVisible)}>
                {militaryVisible ? <> <a className="headSelect" href="#/military">Military</a><a href="#/army">Army</a><a href="#/navy">Navy</a><a href="#/air-force">Air Force</a><a href="#/MND">MND</a> <a href="#/taipei-garrison">TGD</a><a href="#/historical-records-bureau">HRB</a><a href="#/logistics-department">Logistics</a><a href="#/PWD">PWD</a></> : "Expand Military"}
            </button>
            <button onClick={()=> setIndustryVisible(!industryVisible)}>
                {industryVisible ? <><a className="headSelect">Industry</a><a href="#/taiwan-shipbuilding-corporation">TSC</a><a href="#/chinese-federation-of-labour">CFL</a><a href="#/taipower">Taipower</a><a href="#/taibao">Taibao Electronics</a></> : "Expand Industry"}
            </button>
            <a href="#/lin-family"> Lin Family</a>
            <a href="#/gu-family"> Gu Family</a>
            <a href="#/yang-family"> Yang Family</a>
            
        </div>
    )
}

export default Sidebar;