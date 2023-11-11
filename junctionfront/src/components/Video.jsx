import React, { useState } from 'react';

const Video = ({ videos, onSelectVideo }) => {
    const [videoShow, setVideoShow] = useState();
    const URL = ''; // Add your API URL here

    const videoShowOnPage = () => {
        fetch(URL)
            .then(response => response.json())
            .then(responseData => {
                console.log("responseData" + responseData);
                setVideoShow(responseData);
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div style={{ paddingLeft: '17%', paddingRight: '17%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh', flexDirection: 'column' }}>

            <div style={{ marginBottom: '80px', textAlign: 'center' }}>
                <h1 style={{ display: 'inline-block', margin: 0 }}>Junction 2023 PixieRay 💜🩵ActivitEYES🩵💜</h1>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%' }}>
                <h2>Input</h2>
                <h2>Output</h2>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', width: '80%' }}>
                {videos.map((video, index) => (
                    <button key={index} onClick={() => onSelectVideo(video.src)}>
                        Video {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Video;
