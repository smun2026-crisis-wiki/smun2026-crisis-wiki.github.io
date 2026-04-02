import "./App.css";
import Sidebar from "./Sidebar";
import NavyLogo from '/Emblem_of_Navy.png';

function Navy() {
    return (
        <div className='container'>
            <Sidebar />
            <div style={{ flex: "5" }}>
                <img src={NavyLogo}></img>
                <h1>Introduction</h1>
                <p>The Republic of China’s Navy is the maritime branch of the ROC’s military. Its origins, contrary to the ROC Army, trace back to the Imperial Qing Navy, when nearly the entire Qing fleet defected to the revolutionary forces under Sun Yat-Sen, and later, a commander on one of the ships, Huang Chung-ying, became the first Minister of the Navy of the Republic of China.
                </p>
                <p>
                    After World War II, on 25 October 1945, the jurisdiction of Taiwan and Penghu was transferred to the Republic of China and the ROC Navy began its operation in that territory.
                </p>

                <h1>Equipment</h1>
                <h2>Destroyers</h2>
                <ul>
                    <li>Shen Yang Minekaze class, ex-Namikaze</li>
<li>Tan Yang Kagero class ex-Yukikaze </li>
<li>Fen Yang Akitsuki class ex-Yoitsuki </li>
<li>Heng Yang & Hui Yang Matsu class, ex-Kaede, Sugi </li>
<li>Hsin Yang, Hua Yang Tachibana class, ex-Hatsuyume and Tsuta </li>
                </ul>
                <h2>Frigates</h2>
                <ul>
                    <li>Lin Fu ex HMS Mandip, Hunt I class</li>
<li>Lin An Erotofu class</li>
<li>Type B Wai Tai</li>
                </ul>
                
                <h2>Gunboats</h2>
                <ul>
                    <li>Type D Cheng An</li>
<li>Type D Tai An</li>
<li>Type D Tung An</li>
<li>Hi Hsien class ex-Yat Sen</li>
<li>Chu Kuan of the Chu Class</li>
<li>Hiung Hsiang of the Yung Feng class</li>

                </ul>
                <h2>Other Small Boats</h2>
                <ul>
                    <li>Two ex Japanese Ch28 and Cha I class sub-chasers: Yai Lung and Fu Ling</li>
<li>Hsieng Ning, ex-Okitsu, ex-Lepanto, minelayer of the Ostia class</li>
<li>Lu Shan (ex IJN landing ship T172)
</li>
                </ul>

                
            </div>
            <img src='/bestBanner.jpeg' style={{height:"100vh", width:"20vw", flex:"1", position:"sticky", top:"0", right:"0"}}/>
        </div>
    )
}

export default Navy