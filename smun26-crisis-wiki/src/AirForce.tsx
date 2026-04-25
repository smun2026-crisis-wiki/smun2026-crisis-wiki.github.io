import './App.css';
import Sidebar from './Sidebar';
import AirLogo from '/Emblem_of_AirForce.png';

function AirForce(){
    return(
        <div className='container'>
            <Sidebar />
            <div style={{flex:"1", minWidth:"0", display:"flex", flexDirection:"column", alignItems:"center", padding:"clamp(15px, 3vw, 30px)"}}>
                <img src={AirLogo} className="topLogo"></img>
                <h1>Introduction</h1>
                <p>
                    The Republic of China Air Force (ROCAF), also known as the 国军空军(guojun kongjun) is the military aviation branch of the ROC’s Military. The history of the ROCAF traces back to the 1920s when military aviation was first used in the National Revolutionary Army. 
Currently, the main mission of the ROCAF, following the retreat of the Kuomintang to the island of Taiwan, is to defend the airspace of the Island of Taiwan while preparing for an invasion of the mainland.
                </p>
                <h1>Equipment</h1>
                <h2>Fighters</h2>
                <ul>
                    <li>Hayabusa Ki-43</li>
                    <li>Nakajima Ki-44</li>
                    <li>Kawasaki Ki-45</li>
                    <li>Nakajima Ki-81</li>
                    <li>P-51 Mustang</li>
                    <li>AT-6 Texan (Training Aircraft)</li>
                </ul>
                <h2>Bombers</h2>
                <ul>
                    <li>Kawasaki Ki-48</li>
                    <li>Mitsubishi Ki-51</li>
                    <li>Mosquito FB.26 (Fighter-Bomber Variants imported from Canada)</li>
                    <li>B-24 Liberator (Seized from the People’s Liberation Army)</li>
                </ul>
                <h2>Military Transport / Reconnaissance Aircraft</h2>
                <ul>
                    <li>Mitsubishi Ki-15 (Recon)</li>
                    <li>Mitsubishi Ki-46 (Recon)</li>
                    <li>Curtiss C-46 Commando (Military Transport)</li>
                </ul>
            </div>
            <img src='/bestBanner.jpeg' className='sideBanner'/>
        </div>
    )
} 

export default AirForce