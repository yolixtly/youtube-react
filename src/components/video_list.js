import React from 'react';
import VideoListItem from './video_list_item';
const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    console.log(video);
    return <VideoListItem video={video} key={video.etag}/>
  })
  return (
    <ul className="col-md-12 list-group">
      {videoItems}
    </ul>
  )
}

export default VideoList
