import KMTEmblem from '/Emblem_of_MND.png';
import './App.css';
import Sidebar from './Sidebar';

function MND() {

    return (

        <div className="container">
            <Sidebar />
            <div style={{ flex: "5" }}>
                <img src={KMTEmblem}></img>
                <h1>Introduction</h1>
                <p>The Ministry of National Defence is responsible for all defense and military affairs of Taiwan. To carry out this responsibility, it has multiple headquarters departments for specific duties and military authority over the Army, Navy, and Air Force commands, along with control over the administration of the Republic of China Military Academy, formerly known as Whampoa Military Academy. </p>
                <p>It was originally established as the Ministry of War in 1912 when the Republic of China was founded. The Ministry of War established a military occupation operation center in Taipei, Formosa in November 1945, following the Supreme Commander for the Allied Powers Douglas MacArthur's September 2, 1945 General Order No. 1, for the surrender of Japanese troops and auxiliary forces in Formosa and the Pescadores to Generalissimo Chiang Kai-shek. It was renamed as the Ministry of National Defense in 1946.</p>
                <p>The headquarters of the Ministry of National Defence was originally located in Nanjing, but following the Kuomintang’s retreat to Taiwan, it was moved to the district of Zhongzheng.</p>

                <h1>Organistational Structure</h1>
                <p>Currently, as of 1st May 1950, the current Minister for the Ministry of National Defence is Yu Ta-wei (俞大維)</p>
                <h2>Headquarter Departments</h2>
                <ul>
                    <li>Department of Strategic Planning (戰略規劃司)</li>
                    <li>Department of Resources Planning (資源規劃司)</li>
                    <li>Department of Military Justice (法律事務司)</li>
                    <li>Department of Integrated Assessment (整合評估司)</li>
                    <li>
                        <a href="#/PWD">Department of Political Warfare (國防部政治作戰局)</a>
                    </li>
                    <li>Office of the Inspector General (總督察長室)</li>
                    <li>National Defense Procurement Office (國防採購室)</li>
                    <li>Administration Office (政務辦公室)</li>
                    <li>Personnel Office (人事室)</li>
                    <li>Ethics Office (政風室)</li>
                    <li>Accounting Office (主計室)</li>
                </ul>
                <h2>Military Authorities</h2>
                <ul>
                    <li>Army Command Headquarters (陸軍司令部)</li>
                    <li>Navy Command Headquarters (海軍司令部)</li>
                    <li>Air Force Command Headquarters (空軍司令部)</li>
                </ul>

                <h2>Military Institutions</h2>
                <ul>
                    <li>Armed Forces Reserve Command (後備指揮部) </li>
                    <li>Military Police Command (憲兵指揮部)</li>
                    <li>Republic of China Military Academy (中華民國陸軍軍官學校)</li>
                </ul>
            </div>
        </div>
    )
}

export default MND