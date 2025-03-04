import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return "Loading";
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe title="Video Player" src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="header">{video.snippet.title}</h4>
        <p className="">{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
