import "./App.css";
import Sidebar from "./Sidebar";
import linFamily from "/lin-family.png";
function linfamily(){
    return(
    
            <div className='container'>
            <Sidebar/>
            <div style={{flex:"5"}}>
                <img src={linFamily}></img>
                <h1>Introduction</h1>
                <p>The Lin family has historically been a prominent mercantile and landholding family originating in Guangzhou. Once having extensive commercial offices and subsidiaries across southern China, its influence on the mainland has diminished due to the KMT’s retreat to Formosa. While details on the internal family matters of the Lin Family are unclear, what is known is that the family prioritises propriety and financial discipline, having built its reputation through an early adoption of modern business and accounting practices.</p>
                <p>Among its most notable modern figures is Lin Daiyu, who has become regent of the Lin family in recent years. The Lin family has gradually shifted its approach under Daiyu to opt for a safer, cautious approach to consolidation rather than aggressive expansion.
</p>
                <h1>Key Developments</h1>
<p>The early 20th century saw the Lin family’s wealth surge to record proportions, with family holdings and subsidiaries in Guangzhou expanding rapidly. Its wealth was consolidated in agricultural investments and light industrial ventures, maintained by Confucian values and firm adherence to bookkeeping. </p>
<p>However, the Second Sino-Japanese War Wartime severely impacted the Lin family’s prosperity. In their haste to leave the mainland, large portions of their wealth had to be relocated, while others were lost due to mismanagement and hasty decisions by senior family members. The Lin family, now trying to recoup its losses, turns to Lin Daiyu to lead it.</p>
            </div>
            <img src='/bestBanner.jpeg' style={{height:"100vh", width:"20vw", flex:"1", position:"sticky", top:"0", right:"0"}}/>   
        </div>
        
    )
}

export default linfamily