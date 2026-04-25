import { useState } from 'react';
import './App.css';


function Sidebar() {
    const [militaryVisible, setMilitaryVisible] = useState(false);
    const [industryVisible, setIndustryVisible] = useState(false);
    const [economicVisible, setEconomicVisible] = useState(false);

    return (
        <div className='sidebar'>
            <a href="#/">Homepage</a>
            <a href="#/MOE">MOE</a>
            <button onClick={() => setEconomicVisible(!economicVisible)}>
                {economicVisible ? <><a className="headSelect" href="#/MOEA">MOEA</a><a href="#/central-trust-bureau">CTB</a></> : "Expand Economy"}
            </button>
            <a href="#/MOTC">MOTC</a>
            <a href="#/taiwan-railways-administration">TRA</a>
            <a href="#/MOI">MOI</a>
            <a href="#/central-bank-of-china">CBOC</a>
            <a href="#/sino-american-joint-commission-on-rural-reconstruction">SA-JCRR</a>
            <button onClick={() => setMilitaryVisible(!militaryVisible)}>
                {militaryVisible ? <> <a className="headSelect" href="#/military">Military</a><a href="#/army">Army</a><a href="#/navy">Navy</a><a href="#/air-force">Air Force</a><a href="#/MND">MND</a> <a href="#/taipei-garrison">TGD</a><a href="#/historical-records-bureau">HRB</a><a href="#/logistics-department">Logistics</a><a href="#/PWD">PWD</a></> : "Expand Military"}
            </button>
            <button onClick={()=> setIndustryVisible(!industryVisible)}>
                {industryVisible ? <><a className="headSelect">Industry</a><a href="#/taiwan-shipbuilding-corporation">TSC</a><a href="#/taiwan-fertilizer-company">TFC</a><a href="#/chinese-federation-of-labour">CFL</a><a href="#/taipower">Taipower</a><a href="#/taibao">Taibao Electronics</a></> : "Expand Industry"}
            </button>
            <a href="#/lin-family"> Lin Family</a>
            <a href="#/gu-family"> Gu Family</a>
            <a href="#/yang-family"> Yang Family</a>
            
        </div>
    )
}

export default Sidebar;