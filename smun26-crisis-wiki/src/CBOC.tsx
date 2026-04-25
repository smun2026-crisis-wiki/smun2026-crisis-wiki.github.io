import "./App.css"
import Sidebar from "./Sidebar";
import CBOCpng from "/CBOC.png";

function CBOC(){
    return(
        <div className="container">
            <Sidebar/>
            <div style={{flex:"1", minWidth:"0", display:"flex", flexDirection:"column", alignItems:"center", padding:"clamp(15px, 3vw, 30px)"}}>
            <img src={CBOCpng} className="topLogo"></img>
            <h1>General Overview</h1>
            <p>The primary monetary authority of the Republic of China is the Central Bank of China (CBC), which oversees the monetary policy of the ROC. The CBC was founded in 1924 so as to curtail the monetary hyperinflation of the greatly unstable ROC government at the time; at the time, it was led by  Song Ziwen and would slowly grow in influence as the Goumindang sought to reform and develop China’s economy. As an institution responsible for managing all aspects of monetary policy, including the exchange rate of the New Taiwan Dollar (NT$) and interest rates, it operates independently of the Goumindang and is governed by a group of technocrats. </p>
            <h2>Assets</h2>
            <p>The Central Bank of China holds various departments under it, such as the following:</p>
                <ul>
                    <li>
Department of Banking</li>
                    <li>Department of Issuing
</li>
                    <li>Department of Foreign Exchange
</li>
                    <li>Department of the Treasury
</li>
<li>Department of Financial Inspection
</li>
<li>Department of Economic Research</li>
<li>Secretariat
</li>
<li>Department of Accounting
</li>
<li>Department of Information Management
</li>
<li>Personnel Office
</li>
<li>Ethics Office
</li>
<li>Legal Affairs Office</li>
                </ul>
                </div>
            <img src='/bestBanner.jpeg' className='sideBanner'/>
        </div>
    )
}

export default CBOC