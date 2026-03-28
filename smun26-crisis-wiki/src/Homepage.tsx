import KMTLogo from '/Emblem_of_the_Kuomintang.png';

import './App.css';
import Sidebar from './Sidebar';

function Homepage(){

    return(

        <div className="container">
        <Sidebar/>
        <div style={{flex:"5"}}>
        <img src={KMTLogo} className='KMT-emblem'></img>
         <h1 style={{fontSize:'7vw', textAlign:'center'}} id="greeting"> I hate communists </h1>
         </div>
<img src='/bestBanner.jpeg' style={{height:"100vh", width:"20vw", flex:"1", position:"sticky", top:"0", right:"0"}}/>        
</div>
        
    )
}

export default Homepage