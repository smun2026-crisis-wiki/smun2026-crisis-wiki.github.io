import "./App.css";
import Sidebar from "./Sidebar";
import TFC from "/TFC.png";
function tfc(){
    return(
    
            <div className='container'>
            <Sidebar/>
            <div style={{flex:"1", minWidth:"0", display:"flex", flexDirection:"column", alignItems:"center", padding:"clamp(15px, 3vw, 30px)"}}>
                <img src={TFC} className="topLogo"></img>
                <h1>General Overview</h1>
                <p>Established on May 1st, 1946 as a state-owned enterprise under the Resources Committee of the Ministry of Economic Affairs (MOEA) and the Taiwan Provincial Government, the Taiwan Fertiliser Company is a state-owned company focusing on the production of fertilisers. It is formed through the merger of several Japanese‑owned fertiliser‑related manufacturers:</p>
                
                <ul>
                    <li>Taiwan Fertilizer Co., Ltd. Keelung Works → TFC Plant No. 1 

</li>
                    <li>Taiwan Fertilizer Co., Ltd. Keelung Works → TFC Plant No. 2
</li>
                    <li>Taiwan Fertilizer Co., Ltd. Kaohsiung Works → TFC Plant No. 3 
</li>
                    <li>Taiwan Electro‑Chemical Co., Ltd. → TFC Plant No. 1 Luodong Branch
</li>
                    <li>Taiwan Organic Synthesis Co., Ltd. → TFC Plant No. 5, located in Hsinchu City
</li>
                </ul>
            
        </div>
            <img src='/bestBanner.jpeg' className='sideBanner'/>
        </div>
    )
}

export default tfc