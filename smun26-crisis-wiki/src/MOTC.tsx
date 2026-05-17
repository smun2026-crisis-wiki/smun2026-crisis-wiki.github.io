import KMTEmblem from '/Emblem_of_MOTC.png';
import './App.css';
import Sidebar from './Sidebar';

function MOTC() {

    return (

        <div className="container">
            <Sidebar />
            <div style={{flex:"1", minWidth:"0", display:"flex", flexDirection:"column", alignItems:"center", padding:"clamp(15px, 3vw, 30px)"}}>
                <img src={KMTEmblem} className="topLogo" ></img>
                <h1>Introduction</h1>
                <p>The Ministry of Transportation and Communications was formed after the merger of the posts of the Ministry of Transportation under the Republic of China and the Communications Department of the Transportation Bureau of the Governor-General of Taiwan. In Taiwan, the Ministry of Transportation and Communications is responsible for making policy, formulating laws and regulations, and overseeing operations in the area of transportation and communication, while also overseeing operations in meteorology as well. </p>
                <p>Communications operations encompass postal services, managed by the Chunghwa Post, and telecommunications. Meanwhile, transportation operations are divided into three modes: land, air, and sea transport. </p>
                <p>Land transportation comprises railways as well as highway transportation. Sea transportation consists of water transport and harbours. Air transportation includes airline companies and airports.</p>
                <p>In addition, the Central Weather Bureau and the Tourism Bureau are also under the jurisdiction of this Ministry.</p>
                <h1>Organistational Structure</h1>
                <p>Administrators of the Ministry of Transportation and Communications include the Minister, Executive Vice Minister, and two administrative Vice Ministers. As of 1st May 1950, the Minister for the Ministry of Transportation and Communications is He Zhonghan (賀衷寒)</p>
                <h2>Headquarter Departments</h2>
                <ul>
                    <li> <abbr title="Responsible for the administration of domestic and international tourism policy making, execution, and development" >Civil Aviation Administration</abbr>
                    As of today, the only major international airport under the operation of the Civil Aviation Administration is the Matsuyama Airdrome, located in Taipei. 
                    </li>
                    <li>Highway Bureau</li>
                    <li>Central Weather Administration</li>
                    <li><a href="#/Taiwan-Railways-Administration">Taiwan Railways Administration</a></li>
                </ul>
                <h2>Government Corporations</h2>
                <ul>
                    <li>Chunghwa Post Co., Ltd.</li>
                    <li>Kaohsiung Port Land Development Corporation, Ltd.</li>
                </ul>
            </div>
            <img src='/bestBanner.jpeg' className='sideBanner'/>
        </div>
    )
}

export default MOTC