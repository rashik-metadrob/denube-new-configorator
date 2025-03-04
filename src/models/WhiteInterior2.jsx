/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 public/models/whiteInterior2.gltf 
*/

import React, { useRef, useState, useEffect } from 'react'
import { Outlines, useGLTF,PerspectiveCamera, OrbitControls ,CameraControls,Helper} from '@react-three/drei'
import { Vector3, Raycaster, PointLightHelper } from 'three'
import { useFrame, extend, useThree ,} from '@react-three/fiber'
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import * as THREE from "three"
import { gsap } from 'gsap';

extend({ OutlinePass, EffectComposer, RenderPass })


 function WhiteHouseModel({ selectedTexture },props) {
  const { nodes, materials } = useGLTF('../models/whiteInterior2.gltf')
 const [isHover,setIsHover]=useState(false)
 const tableRef = useRef();
 const cameraControlsRef = useRef();
 const pointLightRef = useRef();
 const { camera } = useThree();



 const handleTableClick = () => {
  const tablePosition = tableRef.current.position.clone();
  // Set desired camera position and rotation
  const newCameraPosition = new THREE.Vector3(-1.88, 2.78, -1.90);
  const lookAtPosition = new THREE.Vector3(1, 1, 2);
  const duration = 2; // Duration in seconds
  // Animate camera to new position and look at target
  cameraControlsRef.current?.setLookAt(
    newCameraPosition.x,
    newCameraPosition.y,
    newCameraPosition.z,
    lookAtPosition.x,
    lookAtPosition.y,
    lookAtPosition.z,
    true, // smooth animation
    duration
  );
};

 
  return (

    <>
   
    <pointLight intensity={5} color={'white'} position={[0,3,-3.6]}  castShadow ref={pointLightRef}/>
    <spotLight
        // ref={spotLightRef}
        intensity={5}
        color={'white'}
        position={[0, 3, 0]}
        // angle={Math.PI / 6} // 30 degrees
        penumbra={0.5}
        // distance={50}
        // decay={2}
        // castShadow
      />
    <Helper
        light={pointLightRef.current} 
        args={[pointLightRef.current, 1]} 
      />

 
    <group {...props} dispose={null} >
      <group position={[-3.725, 0, 3.369]} rotation={[-Math.PI / 2, 0, -3.129]} scale={0.96}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 0.045, -0.013]}>
            <mesh geometry={nodes.Object_4.geometry} material={materials['M_sofa_3230_fabric.001']} />
            <mesh geometry={nodes.Object_5.geometry} material={materials['M_sofa_3230_fabric.001']} />
            <mesh geometry={nodes.Object_7.geometry} material={materials['M_sofa_3230_fabric.001']} position={[0.654, 0.66, -0.122]} />
            <mesh geometry={nodes.Object_9.geometry} material={materials['M_sofa_3230_fabric.001']} position={[-0.69, 0.651, -0.119]} />
            <mesh geometry={nodes.Object_11.geometry} material={materials['M_sofa_3230_fabric.001']} position={[-1.201, 0.609, 0.173]} />
            <mesh geometry={nodes.Object_13.geometry} material={materials['M_sofa_3230_fabric.001']} position={[-0.066, 0.505, -0.286]} />
            <mesh geometry={nodes.Object_15.geometry} material={materials['M_sofa_3230_wood.001']} position={[0, -0.045, 0.013]} />
            <mesh geometry={nodes.Object_17.geometry} material={materials['M_sofa_3230_fabric.001']} position={[1.174, 0.621, 0.165]} />
            <mesh geometry={nodes.Object_19.geometry} material={materials['M_sofa_3230_fabric.001']} position={[0, 0.278, 0.018]} />
          </group>
        </group>
      </group>
      <group position={[-3.525, 0, 1.605]} rotation={[-Math.PI / 2, 0, 0]} scale={0.008}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes['Cylinder005_Material_#7_0'].geometry} material={materials.Material_7} position={[-9.556, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} />
        </group>
      </group>
      <group scale={0.01}>
        <group position={[366.217, 115.97, -143.771]} rotation={[-Math.PI / 2, 0, 0]} scale={3.789}>
          <mesh geometry={nodes.candle_Material007_0.geometry} material={materials['Material.007']} />
          <mesh geometry={nodes.candle_Material008_0.geometry} material={materials['Material.008']} />
          <mesh geometry={nodes.candle_Material013_0.geometry} material={materials['Material.013']} />
        </group>
        <group position={[85.821, 88.279, 64.486]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.flower_leaf1_0.geometry} material={materials.leaf1} />
          <mesh geometry={nodes.flower_leaf2_0.geometry} material={materials.leaf2} />
        </group>
        <group position={[188.831, 243.457, -26.58]} rotation={[-Math.PI / 2, 0, 0]} scale={[2.688, 2.688, 23.024]}>
          <mesh geometry={nodes.lighting_Material001_0.geometry} material={materials['Material.001']} />
          <mesh geometry={nodes.lighting_Material003_0.geometry} material={materials['Material.003']} />
          <mesh geometry={nodes.lighting_Material014_0.geometry} material={materials['Material.014']} />
        </group>
        <group position={[388.469, 117.552, -211.434]} rotation={[-Math.PI / 2, 0.148, 0]} scale={[2.712, 31.279, 31.279]}>
          <mesh geometry={nodes.painting_Material010_0.geometry} material={materials['Material.010']} />
          <mesh geometry={nodes.painting_Material011_0.geometry} material={materials['Material.011']} />
        </group>
        <group position={[81.651, 59.793, -127.726]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={[25.257, 25.257, 2.667]}>
          <mesh geometry={nodes.seat_Leather_0.geometry} material={materials.Leather} />
          <mesh geometry={nodes.seat_Material5_0.geometry} material={materials.Material5} />
        </group>
        <mesh geometry={nodes.bowl_grey_0.geometry} material={materials.grey} position={[372.827, 99.081, 270.913]} rotation={[-Math.PI / 2, 0, 0]} scale={[16.524, 16.524, 12.674]} />
        <mesh geometry={nodes.cabinet_Material015_0.geometry} material={materials['Material.015']} position={[367.527, 300.186, 45.941]} rotation={[-Math.PI / 2, 0, 0]} scale={[34.407, 249.171, 3.605]} />
        <mesh geometry={nodes.carpet_Carpet__0.geometry} material={materials.Carpet} position={[81.578, 2.411, 26.536]} rotation={[-Math.PI / 2, 0, 0]} scale={[190.768, 245.015, 0.524]} />
        <mesh geometry={nodes.chopping_board1_Material1_0.geometry} material={materials.Material1} position={[388.318, 97.913, 187.245]} rotation={[-1.593, -1.28, -0.023]} scale={[1.332, 1.546, 1.332]} />
        <mesh geometry={nodes.chopping_board2_Material2_0.geometry} material={materials.Material2} position={[391.595, 98.773, 194.446]} rotation={[-1.6, -1.347, -0.03]} scale={[1.399, 1.586, 1.399]} />
        <mesh geometry={nodes.faucet_Material006_0.geometry} material={materials['Material.006']} position={[392.071, 95.046, 141.652]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.204, 0.204, 1.555]} />
        <mesh geometry={nodes.floor_floor_0.geometry} material={materials.floor} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.house_Material009_0.geometry} material={materials['Material.009']} position={[0, 151.309, -0.282]} rotation={[-Math.PI / 2, 0, 0]} scale={[396.176, 396.176, 150]} />
        <mesh geometry={nodes.IKEA_seat_wood__0.geometry} material={materials.wood} position={[363.595, 31.995, -331.439]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={[17.536, 15.514, 15.514]} />
        <mesh geometry={nodes.jar1_Material3_0.geometry} material={materials.Material3} position={[375.22, 92.792, -108.769]} rotation={[-Math.PI / 2, 0, -1.875]} scale={0.898} />
        <mesh geometry={nodes.jar2_Material4_0.geometry} material={materials.Material4} position={[372.586, 97.235, -121.78]} rotation={[-Math.PI / 2, 0, -1.247]} scale={0.824} />
        <mesh geometry={nodes.jar3_Material002_0.geometry} material={materials['Material.002']} position={[383.419, 94.983, 239.01]} rotation={[-Math.PI / 2, 0, 0]} scale={8.337} />
        <mesh geometry={nodes.jar4_Material017_0.geometry} material={materials['Material.017']} position={[377.036, 94.34, 219.292]} rotation={[-Math.PI / 2, 0, 0]} scale={7.771} />
        <mesh geometry={nodes.table_Material5001_0.geometry} material={materials['Material5.001']} position={[83.1, 65.739, 24.667]} rotation={[-Math.PI / 2, 0, 0]} scale={[80.747, 80.747, 10.763]} onPointerEnter={()=>setIsHover(true)} onPointerLeave={()=>setIsHover(false)}  onClick={handleTableClick} ref={tableRef} receiveShadow>
        <meshStandardMaterial map={selectedTexture || materials['Material5.001'].map} roughness={0.5} metalness={0.7} />
        {isHover && ( <Outlines thickness={4} color="white" />)}
       
        </mesh>
        <mesh geometry={nodes.vase_grey001_0.geometry} material={materials['grey.001']} position={[85.258, 86.332, 64.115]} rotation={[-Math.PI / 2, 0, 0]} scale={8.337} />
        <mesh geometry={nodes.window_Material016_0.geometry} material={materials['Material.016']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      </group>
    </group>
    <CameraControls ref={cameraControlsRef} />
    </>
  )
}

useGLTF.preload('../models/whiteInterior2.gltf')


export default WhiteHouseModel