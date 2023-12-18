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
  const computer = useGLTF("./snow/scene.gltf");

  return (
    <mesh>
      <directionalLight intensity={4} />
      <hemisphereLight intensity={5} />
      <pointLight intensity={10} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 1.3 : 0.9}
        position={[0, -1, 0]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  );
};

function SnowCanvas() {
  const isMobile = useMediaQuery("(min-width: 1060px)");

  return (
    <Canvas
      camera={{ position: [4, 0, 6], fov: 45 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enabled={false}
          target-z={0.3}
          autoRotate
          autoRotateSpeed={0.9}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Snow isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}

export default SnowCanvas;
