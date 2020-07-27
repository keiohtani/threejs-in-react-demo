import React from "react";
import { Canvas } from "react-three-fiber";

const Renderer = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
    </Canvas>
  );
};

export default Renderer;
