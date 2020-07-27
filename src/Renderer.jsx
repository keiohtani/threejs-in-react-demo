import React, { useRef, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "react-three-fiber";
import map from "./images/2_no_clouds_8k.jpg";
import bumpMap from "./images/elev_bump_8k.jpg";
import specularMap from "./images/water_8k.png";
import { TextureLoader } from "three";

const Earth = (props) => {
  const mesh = useRef();

  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.002));

  const [
    mapTexture,
    bumpMapTexture,
    specularMapTexture,
  ] = useLoader(TextureLoader, [map, bumpMap, specularMap]);

  return (
    <mesh {...props} ref={mesh} scale={[4.5, 4.5, 4.5]}>
      <sphereGeometry attach="geometry" args={[0.5, 32, 32]} />
      <meshPhongMaterial
        attach="material"
        map={mapTexture}
        bumpMap={bumpMapTexture}
        bumpScale={0.05}
        specularMap={specularMapTexture}
      />
    </mesh>
  );
};

const Renderer = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Earth position={[0, 0, 0]} />
      </Suspense>
    </Canvas>
  );
};

export default Renderer;
