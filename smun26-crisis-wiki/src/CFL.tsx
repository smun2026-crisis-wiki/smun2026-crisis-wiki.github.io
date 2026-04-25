import "./App.css";
import Sidebar from "./Sidebar";
import Taipower from "/CFL.png";
function CFL(){
    return(
    
            <div className='container'>
            <Sidebar/>
            <div style={{flex:"5"}}>
                <img src={Taipower} className="topLogo"></img>
                <h1>General Overview</h1>
                <p>Established as a way to combat the All-China Federation of Trade Unions led by the CPC, the Chinese Federation of Labour (中華民國全國總工會) is the GMD’s loyal trade union acting as the main representation of the Taiwanese worker in negotiations with employers. The CFL has roughly 200,000 members, mainly within the skilled trades rather than the unskilled workers that its rival, the ACFTU centers its membership upon. </p>
                <p>Nonetheless, like most GMD led institutions, the CFL is a weak organization, lacking in any real political influence, as its leadership is simply an extension of the GMD party machine. Hence, the CFL is merely a front organization created by the Goumindang to undermine communist and underground labor movements that seek to derail the state capitalist project it aims to establish in Taiwan.</p>
            </div>
            <img src='/bestBanner.jpeg' className='sideBanner'/>
        </div>
    )
}

export default CFL