import "./App.css";
import Sidebar from "./Sidebar";
import seal from "/Seal_of_MOI.png";
function MOI(){
    return(
    
            <div className='container'>
            <Sidebar/>
            <div style={{flex:"5"}}>
                <img src={seal} className="topLogo"></img>
                <h1>Introduction</h1>
                <p>The Ministry of the Interior serves as one of the most important pillars of domestic security at this stage in Taiwan’s governance. Broadly, it is charged with maintaining internal stability, population control, local administration, and ideological cohesion under conditions of martial law and existential threat.</p>
                <p>Beyond administration, the Ministry also played a crucial role in earning symbolic legitimacy for the KMT regime. In a government that had lost the mainland, cultural continuity became a key source of authority. A significant way the Ministry achieved this was through officially recognising Kong Decheng as Sacrificial Official to Confucius.</p>
                <h1>Sacrificial Office to Confucius</h1>
                <p>As the 77th direct descendant of Confucius, Kong Decheng was globally understood to be the ceremonial guardian of Confucian tradition. Under this role, he plays a powerful role in issuing formal statements serving as interpretations of Confucian teachings, which carry weight on politics and governance. </p>
                <p>The Ministry also frequently uses the Sacrificial Office to Confucius in attempts to organise and execute massive ceremonies or Confucian rites. Due to great public respect for Kong Decheng, his words have outsized impact, being able to influence public opinion.</p>
            </div>
            <img src='/bestBanner.jpeg' className='sideBanner'/>
            </div>
    )
}

export default MOI