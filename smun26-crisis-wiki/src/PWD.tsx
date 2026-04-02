import './App.css'
import Sidebar from './Sidebar';
import PWDLogo from '/PWDLogo.png'

function PWD(){
    return(
        <div className='container'>
            <Sidebar/>
            <div style={{flex:"5"}}>
                <img src={PWDLogo}/>
                <p>First established as a political works body under the Whampoa Military Academy in 1924, the <strong>Political Warfare Bureau</strong> (国防部政治作战局) operates as an affiliate to the Ministry of National Defense and the ROCA underneath it as a means for the Goumindang to counteract increasing CPC political warfare campaigns against the RoC’s populace and government.</p>
                <p>It acts as the main body overseeing the propaganda and psychological operations (PSYOPs) conducted by the ROCA so as to neutralize ongoing efforts by the CPC to destabilize Goumindang and the ROCA and to plant the seeds for reunification through dismantling trust on the mainland.</p>
            </div>
            <img src='/bestBanner.jpeg' style={{height:"100vh", width:"20vw", flex:"1", position:"sticky", top:"0", right:"0"}}/>   
        </div>
    )

}

export default PWD