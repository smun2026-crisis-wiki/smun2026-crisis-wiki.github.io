import KMTLogo from '/Emblem_of_the_Kuomintang.png';
import KMTFlag from '/KMTFlag.gif';
import './App.css';
import Sidebar from './Sidebar';

function Homepage(){

    return(

        <div className="container">
        <Sidebar/>
        <div style={{flex:"5"}}>
        <embed src={KMTFlag} style={{width:"15vw"}}></embed>
        <br/>
        <img src={KMTLogo} className='KMT-emblem'></img>
         <h1 style={{fontSize:'7vw', textAlign:'center'}} id="greeting"> I hate communists </h1>
         </div>
<img src='/bestBanner.jpeg' style={{height:"100vh", width:"20vw", flex:"1", position:"sticky", top:"0", right:"0"}}/>        
</div>
        
    )
}

export default Homepage