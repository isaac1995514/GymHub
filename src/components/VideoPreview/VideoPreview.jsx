import React from "react";
import { Image } from "semantic-ui-react";

import "./style.scss";

export default function VideoPreview() {
  return (
    <div className="video-preview-card-wrapper">
      <div className="video-preview-image-container">
        <Image src="https://i.ytimg.com/an_webp/tNQXFoVTzF8/mqdefault_6s.webp?du=3000&sqp=CKbXqoEG&rs=AOn4CLB7G_pOr5zy2MouPeo3B4D5HLbM2g" />
        <span className="time-stamp">11:38</span>
      </div>
      <div className="video-info-container">
        <div className="avatar-icon">
          <Image src="https://yt3.ggpht.com/ytc/AAUvwngpo55Jc1_CY7Yf3n-DpZzgj_SOoRizyBTCJe0BaA=s68-c-k-c0x00ffffff-no-rj" />
        </div>
        <div className="video-info">
          <div className="video-title">Test Video</div>
          <div className="channel-name">Test Channel</div>
          <div className="views">14k Views, 33 Minute Ago</div>
        </div>
      </div>
    </div>
  );
}
