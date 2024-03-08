"use client"

import { Canvas } from '@react-three/fiber'
import React, { Suspense, useState } from 'react'

import { Interactive,ARButton, Controllers, XR } from '@react-three/xr'
import { Text } from '@react-three/drei'

function MonCanvas() {
  return (
    <>
    <ARButton/>
        <Canvas camera={{position:[0,0,8]}}>
            <XR referenceSpace='local'>
            <Controllers/>
                {/* <color attach={"background"} args={["#171720"]} />
                <Experience/> */}
                  <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Button position={[0, 0.1, -0.2]} />
                <Controllers />
            </XR>
        </Canvas>
    </>
    
  )
}

export default MonCanvas

function Button(props: any) {
    const [hover, setHover] = useState(false)
    const [color, setColor] = useState<any>('blue')
  
    const onSelect = () => {
      setColor((Math.random() * 0xffffff) | 0)
    }
  
    return (
      <Interactive onHover={() => setHover(true)} onBlur={() => setHover(false)} onSelect={onSelect}>
        <Box color={color} scale={hover ? [0.6, 0.6, 0.6] : [0.5, 0.5, 0.5]} size={[0.4, 0.1, 0.1]} {...props}>
          <Suspense fallback={null}>
            <Text position={[0, 0, 0.06]} fontSize={0.05} color="#000" anchorX="center" anchorY="middle">
              Hello react-xr!
            </Text>
          </Suspense>
        </Box>
      </Interactive>
    )
  }

  function Box({ color, size, scale, children, ...rest }: any) {
    return (
      <mesh scale={scale} {...rest}>
        <boxGeometry args={size} />
        <meshPhongMaterial color={color} />
        {children}
      </mesh>
    )
  }