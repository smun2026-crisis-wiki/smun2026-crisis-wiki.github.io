import KMTLogo from '/Emblem_of_the_Kuomintang.png';
import './App.css';
import Sidebar from './Sidebar';

function Homepage(){

    return(

        <div className="container">
        <Sidebar/>
        <div style={{flex:"1", minWidth:"0", display:"flex", flexDirection:"column", alignItems:"center", padding:"20px"}}>
        <br/>
        <img src={KMTLogo} className='KMT-emblem topLogo'></img>
         <h1 style={{fontSize:'clamp(20px, 5vw, 48px)', textAlign:'center'}} id="greeting"> I hate communists </h1>
         </div>
<img src='/bestBanner.jpeg' className='sideBanner'/>        
</div>
        
    )
}

export default Homepage