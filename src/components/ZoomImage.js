import React from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const ZoomImage = (props) => {
  const { picture } = props;
  return (
    <div className="zoomImage_container">
      <Zoom>
        <img
          alt="that wanaka tree"
          src={picture}
          style={{ width: '30vw', height: '50vh' }}
          className="zoomImage"
        />
      </Zoom>
    </div>
  );
};

export default ZoomImage;
