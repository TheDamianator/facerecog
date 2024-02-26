import React, { useRef, useEffect, useState } from 'react';

const WebcamComponent = ({ setResults }) => {
  const videoRef = useRef();
  const [error, setError] = useState(null);

  useEffect(() => {
    const startVideo = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      } catch (err) {
        console.error('Error accessing webcam:', err);
        setError('Error accessing webcam. Please ensure that your webcam is connected and the browser has permission to access it.');
      }
    };

    startVideo();

    return () => {
      if (videoRef.current.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      <video ref={videoRef} autoPlay playsInline muted style={{ width: '100%', height: 'auto' }} />
    </div>
  );
};

export default WebcamComponent;