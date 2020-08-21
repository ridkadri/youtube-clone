import React from 'react';
import './Sidebar.css';

import SidebarRow from './SidebarRow/SidebarRow';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <SidebarRow selected Icon={HomeIcon} title='Home'/>
            <SidebarRow Icon={WhatshotIcon} title='Trending'/>
            <SidebarRow Icon={SubscriptionsIcon} title='Subscriptions'/>
            <hr/>
        </div>
    )
}

export default Sidebar;
