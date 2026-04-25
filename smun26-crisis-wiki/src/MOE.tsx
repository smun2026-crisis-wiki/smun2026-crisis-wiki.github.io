
import "./App.css";
import Sidebar from "./Sidebar";
import MOE from "/MOE.png";
function template(){
    return(
    
            <div className='container'>
            <Sidebar/>
            <div style={{flex:"5"}}>
                <img src={MOE}></img>
                <h1>General Overview</h1>
                <p>On 8 December 1928, the Nationalist Government promulgated the Organic Act of the Ministry of Education, formally establishing the Ministry of Education as the highest authority for academic, cultural, and educational administration nationwide. Initially, it included the Chengzheng Office, the Department of General Education, the Department of Specialised Education, and the Department of Social Education. These departments were responsible for reforming and developing education within the country.
</p>

                <p>After the Central Government moved to Taiwan in 1949, the Ministry of Education reduced its staffing structure and temporarily set up the Department of General Education, Department of Higher Education, Department of Social Education, Department of General Affairs, Personnel Office, Accounting Office, and the International Cultural and Educational Affairs Office. All of these departments and offices are temporarily left without further subdivision into sections.
</p>
            </div>
            <img src='/bestBanner.jpeg' style={{height:"100vh", width:"20vw", flex:"1", position:"sticky", top:"0", right:"0"}}/>   
        </div>
        
    )
}

export default template