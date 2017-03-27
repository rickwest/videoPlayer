import React from 'react';

const VideoDetail = ({video}) => {
    if (!video) {
        return <div className="col-md-8"><i className="fa fa-spinner fa-spin fa-3x fa-fw"></i></div>;
    }

    const videoId = video.id.videoId;
    const url = `http://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div className="">{video.snippet.title}</div>
                <div className="">{video.snippet.description}</div>
            </div>
        </div>
    )
};

export default VideoDetail;