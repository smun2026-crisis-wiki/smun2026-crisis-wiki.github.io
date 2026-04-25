import "./App.css";
import Sidebar from "./Sidebar";
import SA_JCRR from "/SA-JCRR.png";
function SAJCRR(){
    return(
    
            <div className='container'>
            <Sidebar/>
            <div style={{flex:"1", minWidth:"0", display:"flex", flexDirection:"column", alignItems:"center", padding:"clamp(15px, 3vw, 30px)"}}>
                <img src={SA_JCRR} className="topLogo"></img>
                <h1>General Overview</h1>
                <p>Established in 1948 on the mainland, the Sino-American Joint Commission on Rural Reconstruction (JCRR) relocated to Taiwan following the fall of the mainland, and was subject to the higher authority of the Economic Cooperation Administration and the Chinese government. The JCRR may be divided into 2 parts: administration and operation. The administration oversaw the offices of JCRR personnel, files, accounting, transportation and logistics, while operations oversaw seven divisions: agriculture, irrigation, farmer organisation, social education, rural health and land reform. These divisions were on the highest level, followed by the regional offices and, below them, projects in the field. The JCRR also maintained relations with research institutes, colleges, country offices, and officials. </p>

            </div>
            <img src='/bestBanner.jpeg' className='sideBanner'/>
        </div>
    )
}

export default SAJCRR