import "./App.css";
import Sidebar from "./Sidebar";
import Taipower from "/taipower.png";
function template(){
    return(
    
            <div className='container'>
            <Sidebar/>
            <div style={{flex:"5"}}>
                <img src={Taipower}></img>
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
            <img src='/bestBanner.jpeg' style={{height:"100vh", width:"20vw", flex:"1", position:"sticky", top:"0", right:"0"}}/>   
        </div>
        
    )
}

export default template