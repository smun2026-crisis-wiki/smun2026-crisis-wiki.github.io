import "./App.css";
import Sidebar from "./Sidebar";
import Taipower from "/taipower.png";
function template(){
    return(
    
            <div className='container'>
            <Sidebar/>
            <div style={{flex:"1", minWidth:"0", display:"flex", flexDirection:"column", alignItems:"center", padding:"clamp(15px, 3vw, 30px)"}}>
                <img src={Taipower} className="topLogo"></img>
                <h1></h1>
                <p></p>
                <h1></h1>
                <p></p>
            </div>

            <h2> </h2>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            <img src='/bestBanner.jpeg' className='sideBanner'/>
        </div>
        
    )
}

export default template