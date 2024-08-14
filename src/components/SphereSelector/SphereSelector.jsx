import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { useEffect, useState } from 'react';

const SphereSelector = ({ setSelectedTexture }) => {
  const whiteWoodenTexture = useLoader(TextureLoader, '../texture/whiteWoodenTexture.jpg');
  const darkWoodenTexture = useLoader(TextureLoader, '../texture/darkWoodTexture.jpg');
  const brownishWoodenTexture = useLoader(TextureLoader, '../texture/brownishWoodenTexture.jpg');
  const plainWoodTexture = useLoader(TextureLoader, '../texture/plainWoodTexture.jpg');

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [rotation, setRotation] = useState([0, 0, 0]);



  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Adjust sphere size and spacing based on window width
  const sphereSize = windowWidth < 600 ? 0.3 : 0.5; 
  const spacing = windowWidth < 600 ? 0.4 : 1; 

  return (
    <group>
      <mesh position={[-3 * spacing, 0, 0]} 
      onClick={() => setSelectedTexture(whiteWoodenTexture)} 
      rotation={rotation}
        
        >
        <sphereGeometry args={[sphereSize, 32, 32]} />
        <meshStandardMaterial map={whiteWoodenTexture} />
      </mesh>

      <mesh position={[-1 * spacing, 0, 0]}
       onClick={() => setSelectedTexture(darkWoodenTexture)}
       rotation={rotation}
       >
        <sphereGeometry args={[sphereSize, 32, 32]} />
        <meshStandardMaterial map={darkWoodenTexture} />
      </mesh>

      <mesh position={[1 * spacing, 0, 0]}
       onClick={() => setSelectedTexture(brownishWoodenTexture)}
       rotation={rotation} 
       >
        <sphereGeometry args={[sphereSize, 32, 32]} />
        <meshStandardMaterial map={brownishWoodenTexture} />
      </mesh>

      <mesh position={[3 * spacing, 0, 0]}
       onClick={() => setSelectedTexture(plainWoodTexture)}

       rotation={rotation} 
       >
        <sphereGeometry args={[sphereSize, 32, 32]} />
        <meshStandardMaterial map={plainWoodTexture} />
      </mesh>
    </group>
  );
};

export default SphereSelector;
