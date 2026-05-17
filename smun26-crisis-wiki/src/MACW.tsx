import './App.css'
import Sidebar from './Sidebar';

function MACW(){
    return(
        <div className='container'>
            <Sidebar/>
            <div style={{flex:"1", minWidth:"0", display:"flex", flexDirection:"column", alignItems:"center", padding:"clamp(15px, 3vw, 30px)"}}>
                <h1>General Overview</h1>
                <p>Established in the 1920s, the Movement for the Advancement of Chinese Women was created for the purpose of uplifting women from their current position in Taiwanese society. In the 1920s to 1930s, the Women’s Movement focused on the promotion of women’s education, but at the same time reinforced traditional Confucian gender roles. In the 1930s to 1940s, the Movement became increasingly progressive, promoting the involvement of women in the workforce for the KMT war effort, with heavy emphasis on the advocacy for women’s worker rights. As such, it can be seen that the Movement adapts and changes with societal norms, becoming increasingly progressive over decades. In the 1940s and into the 1950s, the Movement placed greater focus on dismantling traditional gender roles and the stricter enforcement of women’s welfare in the workplace. 
</p><p>
While there may be multiple independent women’s organisations established by private and independent parties, the Movement for the Advancement of Chinese Women serves as the official government body for the promotion of women’s rights. It is able to directly provide recommendations and solutions to the Legislative Yuan. 
</p>
                


            </div>
            <img src='/bestBanner.jpeg' className='sideBanner'/>
        </div>
    )

}

export default MACW