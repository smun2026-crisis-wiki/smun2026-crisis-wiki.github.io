import "./App.css";
import Sidebar from "./Sidebar";
import yang from "/yangJia.png";
function yangFamily(){
    return(
    
            <div className='container'>
            <Sidebar/>
            <div style={{flex:"5"}}>
                <img src={yang}></img>
                <h1>Introduction</h1>
                <p>TThe Yang family is a wealthy family that used to own a large amount of land in the Fujian Province. Some prominent individuals from this family include Yang Wenjie, a famous zoologist, and Yang Tianhuai, CEO of Taibao Electronics, a light assembly electronics manufacturing company. Currently, the family has moved to Taiwan, with around 2 million acres of privately-owned land, with 500 thousand acres of land transferred as a property of Taibao Electronics. </p>
                <h1>Key Developments</h1>
<p>During the Second Sino-Japanese War, many prominent family members were killed by bombings from the Japanese, including both parents of the wealthy yet low-profile Yang Tianhuai. Being their only child, he would go on to inherit the entire plot of land previously owned by his parents in Fujian. </p>
<p>After inheriting the land, Yang Tianhuai would then publicly sell it for approximately 20 million USD, and began relocating his remaining family items to the island of Taiwan.</p>
            </div>
            <img src='/bestBanner.jpeg' style={{height:"100vh", width:"20vw", flex:"1", position:"sticky", top:"0", right:"0"}}/>   
        </div>
        
    )
}

export default yangFamily