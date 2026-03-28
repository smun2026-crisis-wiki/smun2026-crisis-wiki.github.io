import './App.css'
import Sidebar from './Sidebar';

function PWD(){
    return(
        <div className='container'>
            <Sidebar/>
            <div style={{flex:"5"}}>
                
            </div>
            <img src='/bestBanner.jpeg' style={{height:"100vh", width:"20vw", flex:"1", position:"sticky", top:"0", right:"0"}}/>
        </div>
    )

}

export default PWD