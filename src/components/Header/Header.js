import React, {useState} from 'react';
import './Header.css';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

const Header = () => {
    const [inputSearch, setInputSearch] = useState('');

    return (
        <div className="header">
            <div className="header_left">
                <MenuIcon/>
                <Link to='/'>
                    <img
                        className="header_logo" 
                        src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" 
                        alt=""
                    />
                </Link>
            </div>
            <div className="header_center">
                <input
                     onChange={e=> setInputSearch(e.target.value)} 
                     value={inputSearch} 
                     placeholder="Search" 
                     type="text"
                />
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header_inputButton"/>
                </Link>
            </div>
            <div className="header_right">
                <VideoCallIcon className="header_icon"/>
                <AppsIcon className="header_icon"/>
                <NotificationsIcon className="header_icon"/>
                <Avatar
                    alt="Ridwan Kadri"
                    src="https://avatars0.githubusercontent.com/u/18399349?s=460&u=5159658fd5b244b38dc8365207c9be0c09524177&v=4"
                />
            </div>
        </div>
    )
}

export default Header;
