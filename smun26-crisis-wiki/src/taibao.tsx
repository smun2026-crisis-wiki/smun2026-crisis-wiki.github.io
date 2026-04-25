import "./App.css";
import Sidebar from "./Sidebar";
import Taibao from "/taibao.png";
function taibao(){
    return(
    
            <div className='container'>
            <Sidebar/>
            <div style={{flex:"5"}}>
                <img src={Taibao} className="topLogo"></img>
                <h1>Introduction</h1>
                <p>Established officially in 1933 by Yang Tianhuai, Taibao Electronics Private Limited (太保电器公司) operated in America throughout the Second World War as a light electronics manufacturing assembly, producing radios for the United Kingdom on the side of the allies. After the Second Sino-Japanese War, Taibao Electronics Pte Ltd moved its base of operations to Taiwan. 
</p>

                <h1>Assets</h1>
<p>As of 1st May 1950, Taibao Electronics has the following publicly-disclosed assets:

 <ul>
<li>500 thousand acres of infertile land located throughout Taiwan</li>
<li>Proprietary light assembly and manufacturing machinery</li>
<li>An office building located in the city of Taipei</li>
<li>A shipping port located in Hualien</li>
<li>A shipping port located in Kaohsiung</li>
<li>A storage facility with a volume of 30 thousand litres located in Kaohsiung</li>
</ul>
</p>
            </div>
            <img src='/bestBanner.jpeg' className='sideBanner'/>
        </div>
    )
}

export default taibao