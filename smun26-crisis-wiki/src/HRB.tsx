import './App.css'
import Sidebar from './Sidebar';
import HRBLogo from '/Emblem_of_MND.png';

function HRB(){
    return(
        <div className='container'>
            <Sidebar/>
            <div style={{flex:"5"}}>
                <img src={HRBLogo}></img>
                <h1>General Overview</h1>
                <p>Located at the General Staff Headquarters, the Historical Records Bureau is responsible for managing military archives, and includes sections for military history and translation. The Bureau manages records dating back to 1912 with the establishment of the Ministry of War. </p>
                
            </div>
            <img src='/bestBanner.jpeg' style={{height:"100vh", width:"20vw", flex:"1", position:"sticky", top:"0", right:"0"}}/>   
        </div>
    )

}

export default HRB