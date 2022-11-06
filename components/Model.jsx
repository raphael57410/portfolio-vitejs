import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, Float, PresentationControls, Text } from "@react-three/drei";
import React, { useEffect, useState } from "react";
import { useControls } from "leva";
import Computer from './Computer.jsx';


export const Model = () => {
  const [ zoomNumber, setZoomNumber ] = useState(1.3);
  const { position } = useControls("computer",{
    position:{
      x:0,
      y:-1.5,
      z:0
    }
  })

  useEffect(()=> {},[zoomNumber])

  return (
    <Canvas className={"touch-none"} onWheel={(event) => {
      if (event.deltaY > 0) {
        setZoomNumber(1.3)
      }else {
        setZoomNumber(2)
      }
    }}>
      <Environment preset='city' />

      <color args={ ['#695b5b'] } attach='background' />

      <PresentationControls
        global
        polar={ [ -0.4, 0.2 ] }
        azimuth={ [ -1, 0.75 ] }
        config={ { mass:2, tension: 400 } }
        snap={ { mass:4, tension: 400 } }
      >
        <Float rotationIntensity={0.4} speed={2}>
          <rectAreaLight
            width={ 2.5 }
            height={ 1.65 }
            intensity={ 65 }
            color={ 'white' }
            rotation={ [ - 0.1, Math.PI, 0 ] }
            position={ [ 0, 0.55, - 1.15 ] }
          />
          <Computer
            scale={ zoomNumber }
            position-y={ position.y }
            position-x={ position.x }
            position-z={ position.z }
          />
          <Text
            font={"./fonts/bangers.woff"}
            fontSize={0.5}
            position={[3, 0.75, 0.75]}
            rotation-y={-0.8}
            maxWidth={2}
            textAlign={"center"} >
            DEMMERLE RAPHAËL
          </Text>
        </Float>
      </PresentationControls>

      <ContactShadows
        position-y={-1.4}
        opacity={0.4}
        scale={5}
        blur={2.4}
      />

    </Canvas>
  );
};
