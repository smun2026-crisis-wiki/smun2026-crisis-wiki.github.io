import './App.css';
import ArmyLogo from '/Emblem_of_Army.png'
import Sidebar from './Sidebar';

function Army() {
    return (
        <div className="container">
            <Sidebar />
            <div style={{ flex: "5" }}>
                <img src={ArmyLogo}></img>
                <h1>Introduction</h1>
                <p>The Republic of China Army (陆军) originated from the National Revolutionary Army of the Nationalist Chinese regime, which was founded by Sun Yat-sen's Kuomintang (KMT) in 1924, when the Whampoa Military Academy was established with Soviet military assistance.</p>

                <p>Whampoa Military Academy, presided over by Chiang Kai-shek, was tasked with training a professional Chinese revolutionary army (革命軍人) to unify China during the Warlord Era. The army participated in the Northern Expedition to unify China in 1926, the Second Sino-Japanese War, the Chinese Civil War, and, most recently, since the retreat of the ROC to Taiwan, the Battle of Kuningtou.</p>

                <p>While the ROC has retreated to the island of Taiwan, the ROC army’s main mission remains to retake the Chinese mainland from the People’s Republic of China.</p>

                <h1>Equipment</h1>
                <h2>
                    Guns
                </h2>
                <ul>
                    <li>Chiang Kai-Shek Rifles (Type 24) - Primary Bolt Action Rifle</li>
                    <li>M1 Garands - Semi-automatic Rifle provided by the United States</li>
                    <li>Arisaka Type 30 Rifles - Bolt Action Rifles captured from the Japanese Army</li>
                    <li>Thompson Submachine Gun - Supplied by the United States</li>
                    <li>Colt M1911 Pistol - Supplied by the United States</li>
                    <li>Shanxi Type 17 Pistol - Domestically produced</li>
                    <li>M1919 Browning Machine Gun - Supplied by the United States</li>
                    <li>Bren Gun Light Machine Gun - Purchased from Canada</li>
                </ul>
                <h2>Artillery</h2>
                <ul>
                    <li>75mm M116 Howitzers - Coastal Defence</li>
                    <li>57mm QF 6-Pounder - Anti-tank gun</li>
                </ul>
                <h2>Air Defense</h2>
                <ul>
                    <li>40mm Bofors Guns</li>
                    <li>3.7-inch Heavy AA Guns</li>
                </ul>
                <h2>Infantry Vehicle</h2>
                <ul>
                    <li>M8 Greyhounds - Armored Car</li>
                    <li>LVT-4 (Landing Vehicle, Tracked)</li>
                    <li>Willys MB Jeeps</li>
                </ul>

                <h2>Tanks</h2>
                <ul>
                    <li>M4 Shermans - Medium Tank supplied by the United States</li>
                    <li>M5 Stuart Tanks - Light Tank supplied by the United States</li>
                    <li>M24 Chaffee Tanks - Yet to arrive from the United States</li>
                </ul>
            </div>
        </div>
    )


}

export default Army