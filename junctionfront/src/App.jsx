import React, { useState } from 'react';
import { Tab, Tabs } from '@mui/material';
import Video from './components/Video';
import About from './components/About';
import VideoPlayer from './VideoPlayer';

function App() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [value, setValue] = useState("Video");
  const videos = [
    { src: 'path/to/xxxx' },
    { src: 'path/to/xxxx' },
  ];

  const handleSelectVideo = (videoSrc) => {
    setSelectedVideo(videoSrc);
  };

  const handleChange = (event, newValue) => {
    console.log("value is " + newValue);
    setValue(newValue);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>

      <Tabs
        TabIndicatorProps={{ style: { background: 'black' }, text: 'white' }}
        value={value}
        onChange={handleChange}
        centered={true}
        color="pink"
        style={{ backgroundColor: 'pink', width: '100%', maxWidth: '800px' }}
        textColor="inherit"
        indicatorColor="white"
      >
        <Tab label="Video" value="Video" />
        <Tab label="About" value="About" />
      </Tabs>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '90%' }}>
        {(value === "Video") && <Video videos={videos} onSelectVideo={handleSelectVideo} />}
        {value === "About" && <About />}
      </div>

      <VideoPlayer videoSrc={selectedVideo} />
    </div>
  );
}

export default App;
