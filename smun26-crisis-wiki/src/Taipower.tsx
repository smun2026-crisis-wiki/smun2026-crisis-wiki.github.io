import "./App.css";
import Sidebar from "./Sidebar";
import Taipower from "/taipower.png";
function taipower(){
    return(
    
            <div className='container'>
            <Sidebar/>
            <div style={{flex:"5"}}>
                <img src={Taipower}></img>
                <h1>Introduction</h1>
                <p>Taipower (Taiwan dianli gongsi 台灣電力公司, abbrev. Taidian 台電) was established on May 1, 1946 at the end of the Japanese colonial period when the operations of Taiwan Power Corporation (Taiwan dianli zhushi huishe 台灣電力株式會社, est. July 31, 1919) were taken over by the ROC. The two lead positions in Taipower are chairman (dongshizhang 董事長) and president (zong jingli 總經理).</p>
                <h1>Assets</h1>
<p>Currently there is a power plant located in Guishan which was completed in 1905 during Japanese colonial rule. Major projects like the Sun Moon Lake hydropower project and the construction of a transmission line in western Taiwan that connected the north of the island with the south increased the power capacity of Taiwan to 321 Megawatts. However, the current power capacity of Taiwan is 30 thousand watts due to damage by bombings. As such, the company is currently undergoing restoration works.
</p>
            </div>
            <img src='/bestBanner.jpeg' style={{height:"100vh", width:"20vw", flex:"1", position:"sticky", top:"0", right:"0"}}/>   
        </div>
        
    )
}

export default taipower