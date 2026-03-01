import KMTLogo from '/Emblem_of_the_Kuomintang.png';
import './App.css';
import Sidebar from './Sidebar';

function Homepage(){

    return(

        <div className="container">
        <Sidebar/>
        <div style={{flex:"5"}}>
        <img src={KMTLogo} className='KMT-emblem'></img>
         <h1 style={{fontSize:'7vw', textAlign:'center'}} id="greeting"> I love communists </h1>
         </div>
        </div>
    )
}

export default Homepage