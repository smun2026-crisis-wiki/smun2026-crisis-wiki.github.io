import "./App.css";
import Sidebar from "./Sidebar";
import Taipower from "/MOEA.png";
function MOEA(){
    return(
    
            <div className='container'>
            <Sidebar/>
            <div style={{flex:"5"}}>
                <img src={Taipower} className="topLogo"></img>
                <h1>General Overview</h1>
                <p>The Ministry of Economic Affairs is the organ under the Republic of China held responsible for designing and implementing policies that include matters such as trade, stimulating foreign investment, and managing state-owned enterprises, inter alia. Formally, the Ministry is a cabinet-level government agency under the Legislative Yuan. The current appointed Minister of Economic Affairs is Zheng Daoru.
</p>
            </div>
            <img src='/bestBanner.jpeg' className='sideBanner'/>
        </div>
    )
}

export default MOEA