import './navbar.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <div className='navbar'>

            <div className="left">
                <Link to="/" style={{textDecoration:"none"}}>
                    <span>timsocial</span>
                    <HomeOutlinedIcon style={{marginRight: 20, marginLeft:45, color:"black"}}/>
                    <DarkModeOutlinedIcon style={{marginRight: 20, color:"black"}}/>
                    <GridViewOutlinedIcon style={{marginRight: 20, color:"black"}}/>
                </Link>
                <div className="search">
                    <SearchOutlinedIcon/>
                    <input type="text" placeholder="Search.."/>
                </div>

            </div>

            <div className="right">
                <PersonOutlineOutlinedIcon/>
                <EmailOutlinedIcon/>
                <NotificationsActiveOutlinedIcon/>
                <div className="user">
                    <img src='https://sun9-20.userapi.com/impg/ZEKxUaR69W6h1oSu6-GVsJQfsM40DhYdWqxtUQ/x0qiaLNTwlI.jpg?size=1280x853&quality=96&sign=cd006aee0c9b4a441442c3c71119068c&type=album' />
                    <span>Tim Timich</span>
                </div>

            </div>
            
        </div>
     );
}
 
export default Navbar;