import './App.css'
import Sidebar from './Sidebar';
import TGDLogo from '/TGD.png';

function taipeiGarrison(){
    return(
        <div className='container'>
            <Sidebar/>
            <div style={{flex:"5"}}>
                <img src={TGDLogo}></img>
                <h1>Introduction</h1>
                <p>Taipei Garrison Command is a national security body under the ROC Armed Forces. It was established at the end of World War II and is responsible for maintaining peace and security on Taiwan by suppressing activities promoting communism, democracy and the independence of Taiwan.</p>
                <h1>Organisation</h1>
                <p>Taipei Garrison Command is currently commanded by Commander-general Peng Mengqi (彭孟缉), and contains both officers and enlisted personnel from the Army, Military Police, Political Warfare, Intelligence Bureau, National Police Agency and Ministry of the Interior. For security reasons, all draftees are tagged and interviewed before undergoing recruit training.</p>
                <p>Although it is recognised as a military division, Taipei Garrison Command actually functions as a secret police organisation, tasked with maintaining order on Taiwan through suppressing Communist sympathisers, Taiwan independence activists or pro-democracy activists. The last major incident that the organisation had to deal with was the 228 Incident.</p>
            </div>
            <img src='/bestBanner.jpeg' style={{height:"100vh", width:"20vw", flex:"1", position:"sticky", top:"0", right:"0"}}/>   
        </div>
    )

}

export default taipeiGarrison