import "./App.css";
import Sidebar from "./Sidebar";
import yang from "/yangJia.png";
function yangFamily(){
    return(
    
            <div className='container'>
            <Sidebar/>
            <div style={{flex:"1", minWidth:"0", display:"flex", flexDirection:"column", alignItems:"center", padding:"clamp(15px, 3vw, 30px)"}}>
                <img src={yang} className="topLogo"></img>
                <h1>Introduction</h1>
                <p>The Yang family is a wealthy family that used to own a large amount of land in the Fujian Province. Some prominent individuals from this family include Yang Wenjie, a famous zoologist, and Yang Tianyi, CEO of Taibao Electronics, a light assembly electronics manufacturing company. Currently, the family has moved to Taiwan, with around 2 million acres of privately-owned land, with 500 thousand acres of land transferred as a property of Taibao Electronics. </p>
                <h1>Key Developments</h1>
<p>During the Second Sino-Japanese War, many prominent family members were killed by bombings from the Japanese, including both parents of the wealthy yet low-profile Yang Tianyi. Being their only child, he would go on to inherit the entire plot of land previously owned by his parents in Fujian. </p>
<p>After inheriting the land, Yang Tianyi would then publicly sell it for approximately 20 million USD, and began relocating his remaining family items to the island of Taiwan.</p>
            </div>
            <img src='/bestBanner.jpeg' className='sideBanner'/>
        </div>
    )
}

export default yangFamily