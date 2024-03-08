import { CameraControls } from '@react-three/drei'
import React, { useEffect, useRef } from 'react'

function Experience(props:any) {
    
  return (
    <>
      
        <ambientLight intensity={0.5}/>
        <directionalLight intensity={0.5} position={[0, 10, 0]} />
        <group {...props}>
            <mesh>
                <boxGeometry args={[3,5,2]}/>
                <meshBasicMaterial color={"red"}/>
            </mesh>
        </group>
    </>
  )
}

export default Experience