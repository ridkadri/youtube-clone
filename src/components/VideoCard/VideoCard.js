import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import './VideoCard.css';

const VideoCard = ({image, title, channel, views, timestamp, channelimage}) => {
    return (
        <div>
            <img className='videoCard_thumbnail' src={image} alt=''/>
            <div className='videoCard_info'>
                <Avatar
                    className='videoCard_avatar'
                    alt={channel}
                    src={channelimage}
                />
                <div className='videoCard_text'>
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>{views} . {timestamp}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard;
