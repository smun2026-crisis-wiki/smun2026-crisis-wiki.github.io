import './App.css'
import Sidebar from './Sidebar';
import HRBLogo from '/Emblem_of_MND.png';

function HRB(){
    return(
        <div className='container'>
            <Sidebar/>
            <div style={{flex:"1", minWidth:"0", display:"flex", flexDirection:"column", alignItems:"center", padding:"clamp(15px, 3vw, 30px)"}}>
                <img src={HRBLogo} className="topLogo"></img>
                <h1>General Overview</h1>
                <p>Located at the General Staff Headquarters, the Historical Records Bureau is responsible for managing military archives, and includes sections for military history and translation. The Bureau manages records dating back to 1912 with the establishment of the Ministry of War. </p>
                <p>So far, the Bureau contains and maintains around 100,000 records ranging from military operations to enlistment information. Sadly, the rest of the records were lost during the flight to Taiwan.</p>
                
            </div>
            <img src='/bestBanner.jpeg' className='sideBanner'/>
        </div>
    )

}

export default HRB