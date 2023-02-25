import './leftbar.scss'
import Friends from "../../img/1.png"
import Groups from "../../img/2.png"
import Market from "../../img/3.png"
import Watch from "../../img/4.png"
import Memories from "../../img/5.png"
import Events from "../../img/6.png"
import Gaming from "../../img/7.png"
import Gallery from "../../img/8.png"
import Videos from "../../img/9.png"
import Messages from "../../img/10.png"
import Tutorials from "../../img/11.png"
import Courses from "../../img/12.png"
import Fund from "../../img/13.png"

const Leftbar = () => {
    return ( 
        <div className="leftbar">
            <div className="container">
                <div className="menu">
                    <div className="user">
                        <img src='https://sun9-20.userapi.com/impg/ZEKxUaR69W6h1oSu6-GVsJQfsM40DhYdWqxtUQ/x0qiaLNTwlI.jpg?size=1280x853&quality=96&sign=cd006aee0c9b4a441442c3c71119068c&type=album' />
                        <span>Tim Timich</span>
                    </div>
                    <div className="item">
                        <img src={Friends} alt=""/>
                        <span>Friends</span>
                    </div>
                    <div className="item">
                        <img src={Groups} alt=""/>
                        <span>Groups</span>
                    </div>
                    <div className="item">
                        <img src={Market} alt=""/>
                        <span>Market</span>
                    </div>
                    <div className="item">
                        <img src={Watch} alt=""/>
                        <span>Watch</span>
                    </div>
                    <div className="item">
                        <img src={Memories} alt=""/>
                        <span>Memories</span>
                    </div>
                    

                </div>
                <hr/>
                <div className="menu">
                    <span>Your shortcuts</span>
                    <div className="item">
                        <img src={Events} alt=""/>
                        <span>Events</span>
                    </div>
                    <div className="item">
                        <img src={Gaming} alt=""/>
                        <span>Gaming</span>
                    </div>
                    <div className="item">
                        <img src={Gallery} alt=""/>
                        <span>Gallery</span>
                    </div>
                    <div className="item">
                        <img src={Videos} alt=""/>
                        <span>Videos</span>
                    </div>
                    <div className="item">
                        <img src={Messages} alt=""/>
                        <span>Messages</span>
                    </div>
                    
                </div>
                <hr/>
                <div className="menu">
                    <span>Others</span>
                    <div className="item">
                        <img src={Tutorials} alt=""/>
                        <span>Tutorials</span>
                    </div>
                    <div className="item">
                        <img src={Courses} alt=""/>
                        <span>Courses</span>
                    </div>
                    <div className="item">
                        <img src={Fund} alt=""/>
                        <span>Fund</span>
                    </div>
                    <div className="item">
                        <img src={Fund} alt=""/>
                        <span>Fund</span>
                    </div>
                    <div className="item">
                        <img src={Fund} alt=""/>
                        <span>Fund</span>
                    </div>
                    <div className="item">
                        <img src={Fund} alt=""/>
                        <span>Fund</span>
                    </div>
                    <div className="item">
                        <img src={Fund} alt=""/>
                        <span>Fund</span>
                    </div>
                    <div className="item">
                        <img src={Fund} alt=""/>
                        <span>Fund</span>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Leftbar;