import { useState } from 'react';
import './App.css';


function Sidebar() {
    const [militaryVisible, setMilitaryVisible] = useState(false);
    const [industryVisible, setIndustryVisible] = useState(false);
    const [economicVisible, setEconomicVisible] = useState(false);

    return (
        <div className='sidebar'>
            <a href="#/">Homepage</a>
            <a href="#/MOE">Ministry of Education</a>
            <button onClick={() => setEconomicVisible(!economicVisible)}>
                {economicVisible ? <><a className="headSelect" href="#/MOEA">Ministry of Economic Affairs</a><a href="#/central-trust-bureau">Central Trust Bureau</a></> : "Expand Economy"}
            </button>
            <a href="#/MOTC">Ministry of Transportation and Communications</a>
            <a href="#/taiwan-railways-administration">Taiwan Railways Administration</a>
            <a href="#/MOI">Ministry of Interior</a>
            <a href="#/chief-magistrate">Chief Magistrate</a>
            <a href="#/central-bank-of-china">Central Bank of China</a>
            <a href="#/movement-for-the-advancement-of-chinese-women"> Movement for the advancement of Chinese Women</a>
            <a href="#/sino-american-joint-commission-on-rural-reconstruction">Sino-American Joint Commission on Rural Reconstruction</a>
            <button onClick={() => setMilitaryVisible(!militaryVisible)}>
                {militaryVisible ? <> <a className="headSelect" href="#/military">Military</a><a href="#/army">Army</a><a href="#/navy">Navy</a><a href="#/air-force">Air Force</a><a href="#/MND">Ministry of National Defense</a> <a href="#/taipei-garrison">Taipei Garrison</a><a href="#/historical-records-bureau">Historical Records Bureau</a><a href="#/logistics-department">Logistics Department</a><a href="#/PWD">Political Warfare Department</a></> : "Expand Military"}
            </button>
            <button onClick={()=> setIndustryVisible(!industryVisible)}>
                {industryVisible ? <><a className="headSelect" href="#/industry">Industry</a><a href="#/taiwan-shipbuilding-corporation">Taiwan Shipbuilding Corporation</a><a href="#/taiwan-fertilizer-company">Taiwan Fertiliser Company</a><a href="#/chinese-federation-of-labour">Chinese Federation of Labour</a><a href="#/taipower">Taipower</a><a href="#/taibao">Taibao Electronics</a></> : "Expand Industry"}
            </button>
            <a href="#/lin-family"> Lin Family</a>
            <a href="#/gu-family"> Gu Family</a>
            <a href="#/yang-family"> Yang Family</a>
            
        </div>
    )
}

export default Sidebar;