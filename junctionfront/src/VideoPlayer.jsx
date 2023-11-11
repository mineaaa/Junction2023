import React, { useRef, useEffect } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';


const VideoPlayer = ({ videoSrc }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        const player = videojs(videoRef.current);
        player.src(videoSrc);

        return () => {
            if (player) {
                player.dispose();
            }
        };
    }, [videoSrc]);

    return (
        <div data-vjs-player>
            <video ref={videoRef} className="video-js vjs-default-skin" controls />
        </div>
    );
};

export default VideoPlayer;
