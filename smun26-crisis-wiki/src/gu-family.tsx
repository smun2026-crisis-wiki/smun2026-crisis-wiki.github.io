import "./App.css";
import Sidebar from "./Sidebar";
import guJia from "/guJia.png";
function template(){
    return(
    
            <div className='container'>
            <Sidebar/>
            <div style={{flex:"1", minWidth:"0", display:"flex", flexDirection:"column", alignItems:"center", padding:"clamp(15px, 3vw, 30px)"}}>
                <img src={guJia} className="topLogo"></img>
                <h1>Introduction</h1>
                <p>The Koos family is one of Taiwan’s most prominent business families, with roots tracing back to the late Qing Dynasty and the Japanese colonial period. Originating from southern Taiwan, the family rose to prominence through landownership, sugar production, and later industrial and financial enterprises.</p>
                <p>Among its most notable members is Gu Zhenfu, a businessman who would go on to lead the Koos Group, a family-owned business that spans sectors such as cement making, finance, shipbuilding, and light manufacturing. Following the retreat of the Kuomintang government to Taiwan in 1949, the Gu family has positioned itself well within the new political and economic order to leverage its connections with the KMT and mainland elites to maintain and expand its influence.</p>
                <h1>Key Developments</h1>
                <p>Unlike other families, the Gu family actually accumulated significant wealth during the Japanese occupation through landholdings and participation in the colonial sugar economy. However, their position became precarious during the transition following the end of World War II and the return of Taiwan to Chinese control.</p>
                <p>In the immediate post-war years, Gu Zhenfu faced political scrutiny and was briefly imprisoned under accusations of collaboration with Japanese authorities. Despite this, Gu eventually regained his standing in Taiwanese society, rebuilding his company. </p>
            </div>

            <img src='/bestBanner.jpeg' className='sideBanner'/>
        </div>
        
    )
}

export default template