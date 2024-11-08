import React, { useRef } from "react";
import { Car } from "./Car";
import { MeshReflectorMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useGSAP } from "@gsap/react";
import { useScroll } from "framer-motion";
import gsap from "gsap";

const Experience = () => {
  const carRef = useRef();
  const sceneRef = useRef();
  const { scrollYProgress } = useScroll();

  useGSAP(()=>{
    gsap.from(sceneRef.current.scale,{
      x:0,
      y:0,
      z:0,
      duration:2,
      ease:"power4.inOut"
    })
  })

  useFrame(() => {
    const progress = scrollYProgress.get();
    const yRotationEnd = 0.67;
    const maxRotationY = -Math.PI / 2 + Math.PI * 1.5;
    const maxRotationX = Math.PI * 0.35;
  
    // Handle Y-axis rotation first
    if (progress <= yRotationEnd) {
      const yProgress = progress / yRotationEnd;
      carRef.current.rotation.y = -Math.PI / 2 + yProgress * Math.PI * 1.5;
    } else {
      carRef.current.rotation.y = maxRotationY;
      // Start X-axis rotation after Y-axis completes
      sceneRef.current.rotation.x = Math.min((progress - yRotationEnd) / (1 - yRotationEnd) * maxRotationX, maxRotationX);
    }
  });
  

  return (
    <>
      <group ref={sceneRef}>
        <group
          ref={carRef}
          position={[0, -1.5, 0]}
          scale={0.8}
          rotation-y={-Math.PI / 2}
        >
          <Car />
        </group>
        <mesh rotation-x={-Math.PI / 2} position-y={-1.5} scale={100}>
          <planeGeometry args={[10, 10]} />
          <MeshReflectorMaterial
            blur={[600, 100]}
            resolution={2048}
            mixBlur={1}
            mixStrength={30}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#0e0e0e"
            metalness={1}
          />
        </mesh>
      </group>
        <mesh position-y={-1.5} position-z={-15} scale={100}>
          <planeGeometry args={[10, 10]} />
          <meshBasicMaterial color="#878ceb" />
        </mesh>
 
    </>
  );
};

export default Experience;
