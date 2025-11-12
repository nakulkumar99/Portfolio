import { useRef, memo } from "react"; // Added memo
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { pointsInner, pointsMiddle, pointsOuter, pointsScattered } from "./utils";

interface PointProps {
  position: [number, number, number];
  color: string;
  scale?: number;
}

// Memoized Point component
const Point = memo(({ position, color, scale = 0.1 }: PointProps) => {
  return (
    <Sphere position={position} args={[scale, 10, 10]}>
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.5}
        color={color}
      />
    </Sphere>
  );
});

const ParticleRing = () => {
  return (
    <div className="relative h-full">
      <Canvas
        camera={{
          position: [10, -7.5, -5],
          fov: 60,
        }}
        className="bg-[#0a0a0a]"
      >
        <OrbitControls 
          maxDistance={20} 
          minDistance={10}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} intensity={1} />
        <pointLight position={[-30, 0, -30]} power={10.0} />
        <PointCircle />
      </Canvas>

      <h1 className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-slate-200 font-medium text-2xl md:text-5xl pointer-events-none">
      
      </h1>
    </div>
  );
};

const PointCircle = () => {
  const ref = useRef<THREE.Group>(null);
  const scatteredRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (ref.current?.rotation) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
    if (scatteredRef.current?.rotation) {
      scatteredRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.3) * 0.2;
      scatteredRef.current.rotation.y = Math.cos(clock.getElapsedTime() * 0.2) * 0.2;
    }
  });

  return (
    <>
      <group ref={ref}>
        {pointsInner.map((point) => (
          <Point 
            key={point.idx} 
            position={point.position} 
            color={point.color}
            scale={point.scale} 
          />
        ))}
        {pointsMiddle.map((point) => (
          <Point 
            key={point.idx} 
            position={point.position} 
            color={point.color}
            scale={point.scale} 
          />
        ))}
        {pointsOuter.map((point) => (
          <Point 
            key={point.idx} 
            position={point.position} 
            color={point.color}
            scale={point.scale} 
          />
        ))}
      </group>
      <group ref={scatteredRef}>
        {pointsScattered.map((point) => (
          <Point 
            key={point.idx} 
            position={point.position} 
            color={point.color}
            scale={point.scale} 
          />
        ))}
      </group>
    </>
  );
};

export default ParticleRing;