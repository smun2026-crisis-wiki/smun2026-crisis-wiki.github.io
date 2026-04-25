import './App.css'
import Sidebar from './Sidebar'
import Retreat from'/chiang-retreat.jpg';
import sadCommies from "/sadCommies.png";
import attackMap from "/attackMap.png";

function Military(){
    return(
    <div className='container'>
            <Sidebar/>
            <div style={{flex:"5"}}>
                <img src={Retreat} width={"100%"}></img>
                <h1>General Overview</h1>
                <p>The military of the Republic of China consists of the <a href="#/MND">Ministry of National Defence</a>, the ROC <a href="#/army">army</a>, <a href="#/navy">navy</a>, and <a href="#/air-force">air</a> commands, <a href="#/logistics-department">the Logistics Department</a>, <a href="#/PWD">Department of Political Warfare</a>, and the <a href="#/taiwan-garrison-command">Taiwan Garrison Command</a> within this Wiki. Their specific roles, and all other related information, can be found within their respective pages. Overall, while the military’s current objective is to reorganise itself and defend the island of Taiwan, its main overarching objective is still to recapture the mainland from the People’s Republic of China and reestablish the influence of the Republic of China on the mainland.</p>
                <p>In general, <b>observant</b> viewers will note that many of the ROC’s military assets come from the West, in particular the United States of America. This is due to their strong support of the Republic of China’s mandate to govern China, but do note that this support can be withdrawn at any moment. Nevertheless, let us look back briefly at what has recently occured.</p>

                <h1>Battle of Guningtou</h1>

                <p>By the end of 1949, the state of the Republic of China was still uncertain, as the Generalissimo had ordered the retreat of all his assets and every able-bodied man they could take, to the protection and safety of the island of Taiwan, for he saw the prospect of holding on to the mainland as improbable, if not impossible. </p>
                <p>At this point, the PLA still predominantly consisted of a light-infantry force with few naval or air assets. As such, they still needed more time to prepare transport ships to land their troops on both Xiamen and Kinmen islands, with their operations constrained by the number of local civilian vessels and fishing boats they could impress into service. However, the PLA’s 10th Army were still able to overwhelm ineffectual Nationalist forces in Xiamen, as they crossed the bay in hundreds of commandeered fishing vessels and assaulted the island in the face of an oncoming typhoon, overwhelming the Nationalist garrison of seven thousand men easily. 

</p>
<p>Luckily for the nationalists, this would not be the case for Kinmen Island – as the PLA started to get complacent and launched a risky amphibious operation with the remaining few civilian boats they had, while the Nationalists were more prepared to receive them.
</p>
<img src={attackMap}></img>
<p>An hour after midnight on 25 October, the first demonstration of luck on the side of the Nationalists was when they accidentally set off their own land mines. This caused the beach defences to go on alert and shoot flares into the night — upon which they realised they were about to be swamped by nearly eight thousand PLA infantry, approaching on wooden sampans. In addition, the M5A1 Stuart tank #66 under the command of Lt. Yang Chan was bogged down on a sand dune on Longkou beach during a defensive exercise at the same time. The other two Stuarts in his platoon stayed behind in an attempt to tow out the immobilised vehicle. Unlike most of the defending Nationalist troops, the tank crews were veterans, survivors of many campaigns and well-trained in providing infantry support. Thus, despite being stunned by the PLA forces, Yang and his tank platoon could still gain enough composure to open fire with their three 37mm cannons and nine machine guns. Wooden boats burst into flames as the tanks and Youth Army troops in nearby bunkers unleashed the first shots of the battle. For the next hour, they kept up a storm of fire, mowing down dozens of Communist troops charging up the beach and fighting off repeated assaults with grenades or demolition charges, thus containing the PLA’s landing at Longkou successfully.</p>
           
           <p>The second demonstration of luck on the side of the Nationalists was the final blow to the PLA’s amphibious operation –  the LST-400 Chung Lung, a tank landing ship in the Nationalist Navy, was involved in a secret peanut-oil smuggling ring between Kinmen and Taiwan, and was anchored nearby on the eve of the attack. Accompanied by a second Nationalist ship, it found dozens of sampans commandeered by the PLA stuck on beach obstacles, and  proceeded to shred many of the defenceless boats, which were badly needed to land the second wave of PLA infantry.</p>
            
            <p>Thus, even with successful PLA landings on the west of Longkou, the destruction of their fishing boats meant that reinforcements could not be deployed to the island, and that the PLA troops could not leave the island as well. As such, they were immediately attacked and overwhelmed by Nationalist forces on the island with no escape. By the morning of the 27th, the Nationalists began their final effort to clear out the remaining Communist positions at Guningtou, with simultaneous thrusts from the south and east. By the afternoon, the Nationalists reoccupied Guningtou. Organised resistance ended with the capture of 900 remaining PLA troops who had fled to the beaches and bluffs to the north. Over the next few weeks, dozens of PLA stragglers were rounded up around the island.</p>
            <img src={sadCommies}></img>
            <p>While luck definitely played a role in the successful defence of Kinmen Island, the battle showcased the importance of the Nationalists maintaining their defences and guard during island patrols, which will come in useful during future island defences, and also marked a turning point for the Republic of China. It ended the PLA’s amphibious attempts to capture offshore islands and signalled the final halting of the momentum of the PLA assault against Taiwan. 

</p>
<p>In addition, it also drastically changed American foreign policy towards the Republic of China for the better. At the time, the Harry Truman administration in the United States had all but given up supporting the Chiang Kai-shek government, largely blaming Chiang Kai-shek and his government for the loss of China to the Communists. However, one week after the Nationalist victory at Kinmen and most likely in response to it, the Truman administration initiated contact with Chiang for the first time since 1948, and officially informed Chiang in Taipei on 3 November that the US government would support his efforts in Taiwan. This was an enormous morale boost for Chiang and his defeated government. He now, for the first time, had Washington’s support for using Taiwan as a base from which he might stage a comeback to the mainland.
</p>
            </div>
<img src='/bestBanner.jpeg' style={{height:"100vh", width:"20vw", flex:"1", position:"sticky", top:"0", right:"0"}}/>
    </div>
    )
}

export default Military