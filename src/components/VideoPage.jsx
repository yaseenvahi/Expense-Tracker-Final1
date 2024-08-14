import React from 'react';
import { useNavigate } from 'react-router-dom';
import './VideoPage.css';
import v from '../assets/video.mp4';

const VideoPage = () => {
  const navigate = useNavigate();

  const handleExploreNow = () => {
    navigate('/');
  };

  return (
    <div className="video-page">
      <div className="video-container">
        <video className="background-video" autoPlay muted loop>
          <source src={v} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="content-container">
        <div className="content">
          <div className="left-side">
            {/* Additional content can be added here if needed */}
          </div>
          <div className="right-side">
            <h1>Description</h1>
            <p className="description">
              
              Your description goes here. This is a sample description to show how the text will look on the right side of the image. Add more details to provide a comprehensive overview of the content. This area can be extended to include additional information, highlights, or any other relevant text you want to convey to the users.
            </p>
            <button className="explore-button" onClick={handleExploreNow}>Explore Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
