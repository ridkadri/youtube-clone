import React from 'react';
import './SearchPage.css';

import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from '../ChannelRow/ChannelRow';
import VideoRow from '../VideoRow/VideoRow';

const SearchPage = () => {
    return (
        <div className='searchPage'>
            <div className='searchPage_filter'>
                <TuneIcon/>
                <h2>FILTER</h2>
            </div>
            <hr/>
            <ChannelRow
                image='https://avatars0.githubusercontent.com/u/18399349?s=460&u=5159658fd5b244b38dc8365207c9be0c09524177&v=4'
                channelName='Ridwan Kadri'
                verified
                subs='100K'
                noOfVideos={200}
                description='You can find awesome forex trading tips that will get you rich!'
            />
            <hr/>
            <VideoRow
                views='2.3M' 
                subs='1M'
                description='Top 5 Programming Languages to Learn in 2020' 
                timestamp='1 Minute Ago'
                channel='Ridwan Kadri'
                title='Full React JS Course 2020'
                image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.1FWNdNxk0piBXBAmhPSyLgHaEK%26pid%3DApi&f=1'
            />
            <VideoRow
                views='2.3M' 
                subs='1M'
                description='Top 5 Programming Languages to Learn in 2020' 
                timestamp='1 Minute Ago'
                channel='Ridwan Kadri'
                title='Node JS Course 2020'
                image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ogFLse3FZlJ7tClDE4PnpwHaEK%26pid%3DApi&f=1'
            />
            <VideoRow
                views='2.3M' 
                subs='1M'
                description='Top 5 Programming Languages to Learn in 2020' 
                timestamp='1 Minute Ago'
                channel='Ridwan Kadri'
                title='Full Firebase Course 2020'
                image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.pvRI2nTACKIi1mUcYmHW-AHaEK%26pid%3DApi&f=1'
            />
            <VideoRow
                views='2.3M' 
                subs='1M'
                description='Top 5 Programming Languages to Learn in 2020' 
                timestamp='1 Minute Ago'
                channel='Ridwan Kadri'
                title='Vue JS with Firebase Course 2020'
                image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.JTiE4HlJX4YdWb0QkVspwQHaEK%26pid%3DApi&f=1'
            />
            <VideoRow
                views='2.3M' 
                subs='1M'
                description='Top 5 Programming Languages to Learn in 2020' 
                timestamp='1 Minute Ago'
                channel='Ridwan Kadri'
                title='Angular JS Course 2020'
                image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.K4_oVf29VaXQI53XcVX03QHaEK%26pid%3DApi&f=1'
            />
        </div>
    )
}

export default SearchPage;
