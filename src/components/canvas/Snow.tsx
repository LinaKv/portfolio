import React from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Float } from "@react-three/drei";
import CanvasLoader from "../Loader";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
  isMobile: boolean;
};

const Snow = ({ isMobile }: Props) => {
  const computer = useGLTF("./rubiks_cube/scene.gltf");

  return (
    <mesh castShadow>
      <primitive
        object={computer.scene}
        scale={isMobile ? 55 : 30}
        // scale={55}
        // position={isMobile ? [0, 0, 0] : [0, 0, 0]}
        position={[0, 0, 0]}
        rotation={[1, 0, 0]}
        castShadow
      />
    </mesh>
  );
};

function SnowCanvas() {
  const isMobile = useMediaQuery("(min-width: 1060px)");

  return (
    <Canvas
      camera={{ position: isMobile ? [12, 0, 0] : [6, 0, 0] }}
      gl={{ preserveDrawingBuffer: true }}
      shadows
    >
      <Suspense fallback={<CanvasLoader />}>
        <directionalLight position={[2, 3, -0.16]} intensity={5} />
        <hemisphereLight intensity={5} />
        <pointLight intensity={10} castShadow />
        <OrbitControls
          enablePan={false}
          target-z={0.01}
          autoRotate
          enableZoom={false}
        />
        <Snow isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}

export default SnowCanvas;
