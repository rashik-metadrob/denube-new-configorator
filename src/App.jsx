import { useEffect, useReducer, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';

import WhiteHouseModel from './models/WhiteInterior2';
import SphereSelector from './components/SphereSelector/SphereSelector';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { Outlines, useGLTF,PerspectiveCamera, OrbitControls ,CameraControls,Helper} from '@react-three/drei'
import {Physics} from '@react-three/cannon'
function App() {
  const plainWoodTexture = useLoader(TextureLoader, '../texture/plainWoodTexture.jpg');
  const [selectedTexture, setSelectedTexture] = useState(plainWoodTexture);
const camRef=useRef()


useEffect(()=>{
if(camRef.current){
  console.log(camRef.current.position)
  console.log(camRef.current.rotation)

}
},[camRef.current])
  return (
    <>
      <div className='w-screen h-screen fixed'>
        <Canvas>
        <PerspectiveCamera 
        makeDefault 
        position={[
          0.32411747821147824, 
          2.5713799580248797, 
          4.111320945615752]} 
        fov={75} 
        rotation={[
          -0.5589148505300063,
          0.06673979900934829, 
          0.04168652032816675]}  
        near={1} 
        far={100} 

        ref={camRef}
      />
          <ambientLight intensity={2} />
          <OrbitControls />
<Physics  gravity={[0, -9.8, 0]} >

          <WhiteHouseModel selectedTexture={selectedTexture} />
</Physics>
        </Canvas>

        <div className='w-full' style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)', maxWidth: '90%' }}>
          <Canvas orthographic camera={{ zoom: window.innerWidth < 600 ? 70 : 100, position: [0, 0, 100] }}>
            <ambientLight intensity={2} />
            <SphereSelector setSelectedTexture={setSelectedTexture} />
          </Canvas>
        </div>
      </div>
    </>
  );
}

export default App;
