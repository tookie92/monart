"use client"

import { Canvas } from '@react-three/fiber'
import React from 'react'
import Experience from './Experience'
import { ARButton, Controllers, XR } from '@react-three/xr'

function MonCanvas() {
  return (
    <>
        <ARButton/>
        <Canvas camera={{position:[0,0,8]}}>
            <XR referenceSpace='local'>
           
                <color attach={"background"} args={["#171720"]} />
                <Experience />
            </XR>
        </Canvas>
    </>
    
  )
}

export default MonCanvas