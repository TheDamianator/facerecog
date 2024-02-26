import React, { useEffect } from "react";
import * as faceapi from "face-api.js";

const LoadModelsComponent = () => {
  useEffect(() => {
    const loadModels = async () => {
      try {
        await Promise.all([
          faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
          faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
          faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
        ]);

        console.log("Models loaded successfully");
      } catch (error) {
        console.error("Error loading models:", error);
      }
    };

    loadModels();
  }, []);

  return <div>Loading face detection models...</div>;
};

export default LoadModelsComponent;
