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

                
            </div>
        </div>
    )
}

export default Navy