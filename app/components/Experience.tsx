import { CameraControls, Text } from '@react-three/drei'
import { Controllers } from '@react-three/xr'
import React, { Suspense, useEffect, useRef, useState } from 'react'

function Experience(props:any) {
    
  return (
    <>
      
        <ambientLight intensity={0.5}/>
        <directionalLight intensity={0.5} position={[0, 10, 0]} />
        {/* <group {...props}>
            <mesh>
                <boxGeometry args={[3,5,2]}/>
                <meshBasicMaterial color={"red"}/>
            </mesh>
        </group> */}
         <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Button position={[0, 0.1, -0.2]} />
          <Controllers />
    </>
  )
}

export default Experience


function Box({ color, size, scale, children, ...rest }: any) {
    return (
      <mesh scale={scale} {...rest}>
        <boxGeometry args={size} />
        <meshPhongMaterial color={color} />
        {children}
      </mesh>
    )
  }
  
  function Button(props: any) {
    const [color, setColor] = useState<any>('blue')
  
    const onSelect = () => {
      setColor((Math.random() * 0xffffff) | 0)
    }
  
    return (
      <Box color={color} scale={[0.5, 0.5, 0.5]} size={[0.4, 0.1, 0.1]} {...props} onClick={onSelect}>
        <Suspense fallback={null}>
          <Text position={[0, 0, 0.06]} fontSize={0.05} color="#000" anchorX="center" anchorY="middle">
            Hello react-xr!
          </Text>
        </Suspense>
      </Box>
    )
  }