import { Canvas } from "@react-three/fiber";
import React from "react";
import Experience from "./Experience";
import {
  Environment,
  OrbitControls,
  ScrollControls,
  Stage,
} from "@react-three/drei";
import {
  Bloom,
  BrightnessContrast,
  EffectComposer,
  Vignette,
} from "@react-three/postprocessing";

const Scene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 30 }}>
      <color attach="background" args={["#000"]} />
      <Stage adjustCamera={false} />
      <fog attach="fog" args={["#878ceb", 8, 30]} />

      <directionalLight intensity={20} position={[1, 2, 3]}  />
      <directionalLight intensity={5} position={[0, -2, 3]}  />

      <Experience  />
      <OrbitControls enableZoom={false} />

      <EffectComposer>
        <Bloom intensity={2} luminanceThreshold={1} />
        <BrightnessContrast brightness={0} contrast={0.2} />
        <Vignette darkness={.1} />
      </EffectComposer>
    </Canvas>
  );
};

export default Scene;
