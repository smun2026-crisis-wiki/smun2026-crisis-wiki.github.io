import "./App.css";
import Sidebar from "./Sidebar";
import TRA from "/TRA.png";
function template(){
    return(
    
            <div className='container'>
            <Sidebar/>
            <div style={{flex:"5"}}>
                <img src={TRA}></img>
                <h1>General Overview</h1>
                <p>The superseding authority over the railways of the island of Taiwan, the Taiwan Railways Administration (TRA), is a governmental agency founded as a central authority on the conventional cargo and passenger rail of Taiwan in 1948. The TRA is underneath the Taiwan Provincial Government and the aforementioned Ministry of Transport and acts as a nonpartisan institution serving the public administration of the island.</p>
                <p>The TRA manages and operates nearly 1,097 km of track, most of which are in the narrow 1,067 mm gauge of the Japanese Empire, with most TRA railways being based on the Japanese railway system both in design and operation. TRA’s Western Trunk line is the administration’s busiest and fully electrified train line connecting Taipei with Kaohsiung. </p>
            </div>
            <img src='/bestBanner.jpeg' style={{height:"100vh", width:"20vw", flex:"1", position:"sticky", top:"0", right:"0"}}/>   
        </div>
        
    )
}

export default template