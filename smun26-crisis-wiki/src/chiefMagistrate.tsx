import './App.css'
import Sidebar from './Sidebar';

function chiefMagistrate(){
    return(
        <div className='container'>
            <Sidebar/>
            <div style={{flex:"1", minWidth:"0", display:"flex", flexDirection:"column", alignItems:"center", padding:"clamp(15px, 3vw, 30px)"}}>
                <h1>General Overview</h1>
                <p>The Chief Magistrate of Taiwan Province is responsible for maintaining law, order and justice in the province of Taiwan. This includes the ability to order examinations of complainants in oath, mediation orders, and directing the police to investigate certain cases. Most importantly, the Chief Magistrate provides the final say on the highest legal matters of the land, which includes execution of persons in power found guilty of abusing their position.</p>
                <p>Currently, the Chief Magistrate of Taiwan Province is Bao Zhongqiang (包中强) who is also holding the special title of Special Inspector General for Anti-Corruption.</p>
                <h2>Assets</h2>
                <p>As of right now, the Chief Magistrate's office has the following assets:</p>
                <ul>
                    <li>50 legally-trained magistrates spread throughout Taiwan, who are able to aid in legal proceedings</li>
                    <li>10 Executioners, personally provided by the Generalissimo, who are gun-trained and each armed with a Chiang-Kai-Shek Rifle</li>
                    <li>An office building along with the Supreme Court, located in Taipei. This office also contains records of prior high-profile cases.</li>
                </ul>
                <p></p>


            </div>
            <img src='/bestBanner.jpeg' className='sideBanner'/>
        </div>
    )

}

export default chiefMagistrate