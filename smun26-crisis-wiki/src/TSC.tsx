import "./App.css";
import Sidebar from "./Sidebar";
import TSC from "/TSC.png";
function tsc(){
    return(
    
            <div className='container'>
            <Sidebar/>
            <div style={{flex:"5"}}>
                <img src={TSC} alt="TSC Logo"></img>
                <h1>Introduction</h1>
                <p>The Taiwan Shipbuilding Corporation was a state-managed industrial enterprise established in the early years of the Republic of China’s relocation to Taiwan. Its main goal was to develop Taiwan’s shipbuilding capacity, as during this period, having control over production of maritime logistics concerned the nation’s survival.</p>
                <p>By 1950, Taiwan’s vulnerability to disruption caused by naval blockade from the Chinese Communist Party meant that the Taiwan Shipbuilding Corporation was operating under a dual mandate. While it had to shore up production of commercial ships, it also was responsible for building Taiwan’s military naval assets.</p>
                <p>Stewardship over this company was passed to Li Guoding in 1950, with a technocratic approach that increasingly emphasised practical economic reconstruction.</p>
                <h2>Public Assets</h2>
                <p>As of 1st May 1950, the Taiwan Shipbuilding Corporation has the following publicly-disclosed assets:</p>
                <ul>
                    <li>3 operational dry docks located in Kaohsiung, capable of handling medium-tonnage vessels</li>
                    <li>1 auxiliary repair dock in Keelung for light naval and commercial maintenance</li>
                    <li>State-owned shipyard complex spanning approximately 120 acres in Kaohsiung</li>
                    <li>Heavy fabrication and metalworking equipment for hull construction and structural assembly</li>
                    <li>A trained workforce of approximately 2,500 labourers and technicians, including a small cadre of foreign-trained engineers</li>
                    <li>Warehousing facilities with a combined storage capacity of 80 thousand tonnes</li>
                    <li>Administrative headquarters located in Taipei</li>
                </ul>
            </div>
            <img src='/bestBanner.jpeg' style={{height:"100vh", width:"20vw", flex:"1", position:"sticky", top:"0", right:"0"}}/>   
        </div>
        
    )
}

export default tsc