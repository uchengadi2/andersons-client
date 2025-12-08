import React from 'react';

const Youtube = () => (
  <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
    <iframe
      src="https://www.youtube.com/embed/iOf9vw_kUBM"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
      title="Embedded YouTube Video"
    />
  </div>
);

export default Youtube;
