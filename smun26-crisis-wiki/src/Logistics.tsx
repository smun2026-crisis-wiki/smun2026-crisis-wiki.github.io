import './App.css'
import Sidebar from './Sidebar';
import HRBLogo from '/Emblem_of_MND.png';

function Logistics(){
    return(
        <div className='container'>
            <Sidebar/>
            <div style={{flex:"5"}}>
                <img src={HRBLogo}></img>
                <h1>General Overview</h1>
                <p>Army Logistics Division was established under Army Command Headquarters’ organization structure in June 1st, 1946. However, it was impermanent suspended operation in July, 1949 due to Counter-Insurgency. In April 16th, 1950, it was Re-organized as “Fourth Department” in Feng Shan, Kaohsiung City. It is responsible for general logistics management: managing armaments, munitions, medical supplies, and within the ROC military.</p>
                
            </div>
            <img src='/bestBanner.jpeg' style={{height:"100vh", width:"20vw", flex:"1", position:"sticky", top:"0", right:"0"}}/>   
        </div>
    )

}

export default Logistics