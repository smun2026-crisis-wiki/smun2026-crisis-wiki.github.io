import { useState } from 'react';
import './App.css';


function Sidebar() {
    const [militaryVisible, setMilitaryVisible] = useState(false);

    return (
        <div className='sidebar'>
            <a href="#/">Homepage</a>
            <a href="#/MOTC">MOTC</a>
            <button onClick={() => setMilitaryVisible(!militaryVisible)}>
                {militaryVisible ? <> <a className="headSelect" href="#/military">Military</a><a href="#/army">Army</a><a href="#/navy">Navy</a><a href="#/air-force">Air Force</a><a href="#/MND">MND</a> <a href="#/PWD">PWD</a></> : "Expand Military"}
            </button>
        </div>
    )
}

export default Sidebar;