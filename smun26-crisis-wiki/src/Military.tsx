import './App.css'
import Sidebar from './Sidebar'
import Retreat from'/chiang-retreat.jpg';

function Military(){
    return(
    <div className='container'>
            <Sidebar/>
            <div style={{flex:"5"}}>
                <img src={Retreat} width={"100%"}></img>
                <h1>General Overview</h1>
                <p>The military of the Republic of China consists of the <a href="#/MND">Ministry of National Defence</a>, the ROC <a href="#/army">army</a>, <a href="#/navy">navy</a>, and <a href="#/air-force">air</a> commands, <a href="#/logistics-department">the Logistics Department</a>, <a href="#/PWD">Department of Political Warfare</a>, and the <a href="#/taiwan-garrison-command">Taiwan Garrison Command</a> within this Wiki. Their specific roles, and all other related information, can be found within their respective pages. Overall, while the military’s current objective is to reorganise itself and defend the island of Taiwan, its main overarching objective is still to recapture the mainland from the People’s Republic of China and reestablish the influence of the Republic of China on the mainland.</p>
                <p>In general, <b>observant</b> viewers will note that many of the ROC’s military assets come from the West, in particular the United States of America. This is due to their strong support of the Republic of China’s mandate to govern China, but do note that this support can be withdrawn at any moment.</p>
            </div>
    </div>
    )
}

export default Military