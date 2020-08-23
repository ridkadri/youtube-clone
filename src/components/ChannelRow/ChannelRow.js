import React from 'react';
import './ChannelRow.css';
import {Avatar} from '@material-ui/core';
import VerifiedIcon from '@material-ui/icons/CheckCircleOutline';

const ChannelRow = ({image, channelName, verified, subs, noOfVideos,description}) => {
    return (
        <div className='channelRow'>
            <Avatar 
                className='channelRow_logo' 
                src={image} 
                alt={channelName}
            />
            <div className='channel_text'>
                <h4>{channelName}{verified && <VerifiedIcon/>}</h4>
                <p>
                {subs} subscribers . {noOfVideos} videos
                </p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ChannelRow
