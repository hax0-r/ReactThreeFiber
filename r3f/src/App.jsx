// first use this command in terminal in public folder
// npx gltfjsx <3dName>.gltf

import { Canvas } from '@react-three/fiber'
import './App.css'
import { Suspense } from 'react'
import Scene from "../public/Scene"
import { ContactShadows, Environment, OrbitControls } from '@react-three/drei'

function App() {

  return (
    <>
      <Canvas>
        {/* intensity is use to increase light */}
        <ambientLight intensity={1} />

        {/* this is use only rotate x axis
        <OrbitControls enableZoom={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} /> */}


        <OrbitControls autoRotate={true} autoRotateSpeed={2} enableZoom={false} />
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
        <Environment preset='sunset' />
        <ContactShadows position={[0, -2, 0]} opacity={.5} scale={50} blur={1} far={10} resolution={256} color="#000000" />
      </Canvas>
    </>
  )
}

export default App
