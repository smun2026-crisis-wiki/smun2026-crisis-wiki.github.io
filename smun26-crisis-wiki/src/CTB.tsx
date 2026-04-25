
import "./App.css";
import Sidebar from "./Sidebar";
import CTC from "/CTC.png";
function template(){
    return(
    
            <div className='container'>
            <Sidebar/>
            <div style={{flex:"5"}}>
                <img src={CTC}></img>
                <h1>General Overview</h1>
                <p>One of the main financial institutions of the Republic of China, the Central Trust of China (中央信託局) or CTC is a trust bureau functioning as the main body overseeing the state-owned enterprises owned by the Government of the ROC. The CTC is a body that is directly responsible for the savings and insurance, operated by the state; therefore, the CTC is, in effect, the accounting body reviewing the effectiveness of these programs and corporations. This trust is directly responsible to the Ministry of Economy, as it controls critical sectors of economic development.
</p>
                <h1>Assets</h1>
                <p>Currently, the CTC is focused on procurement and trade inventory to supply the ROC’s government, including imported/exported goods needed for economic reconstruction such as food, building material, and tools. Approximately 240 million NTD is under the management of the CTC mainly within insurance portfolios, trade and savings deposits, and five warehouses in Taipei and Kaoshiung owned and operated by the CTC.</p>
            </div>
            <img src='/bestBanner.jpeg' style={{height:"100vh", width:"20vw", flex:"1", position:"sticky", top:"0", right:"0"}}/>   
        </div>
        
    )
}

export default template