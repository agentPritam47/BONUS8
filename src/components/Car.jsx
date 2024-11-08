import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Car(props) {
  const { nodes, materials } = useGLTF('/free_sci-fi_vehicle_007_-_public_domain_cc0.glb')
  let scale = 1

  if(window.innerWidth < 768){
    scale = 0.5
  } else {
    scale = 1
  }
  return (
    <group {...props} dispose={null} scale={scale} position-z={-.2} >
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_Material001_0.geometry}
          material={materials['Material.001']}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_Material002_0.geometry}
          material={materials['Material.002']}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
            <meshPhysicalMaterial color="black" metalness={1} roughness={0} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_Material002_0.geometry}
          material={materials['Material.002']}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
            <meshPhysicalMaterial color="black" metalness={1} roughness={0} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003_Material002_0.geometry}
          material={materials['Material.002']}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
            <meshPhysicalMaterial color="black" metalness={1} roughness={0} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_Material002_0.geometry}
          material={materials['Material.002']}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
            <meshPhysicalMaterial color="#621cd1" metalness={1} roughness={0.1} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_Material002_0.geometry}
          material={materials['Material.002']}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
            <meshPhysicalMaterial color="#621cd1" metalness={1} roughness={0.1} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006_Material003_0.geometry}
          material={materials['Material.003']}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007_Material003_0.geometry}
          material={materials['Material.003']}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008_Material002_0.geometry}
          material={materials['Material.002']}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
            <meshPhysicalMaterial color="#621cd1" metalness={.95} roughness={0.1} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_Material004_0.geometry}
          material={materials['Material.004']}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010_Material005_0.geometry}
          material={materials['Material.005']}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
            <meshPhysicalMaterial emissive={"white"} emissiveIntensity={1} />
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('/free_sci-fi_vehicle_007_-_public_domain_cc0.glb')
