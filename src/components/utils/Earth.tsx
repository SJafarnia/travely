'use client';
import { OrbitControls, useGLTF, useFBX } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

const EarthModel = () => {
    const scene = useGLTF('/3D/earth/scene.gltf');
    const scnee = useFBX('/3D/earthanime/earth.fbx');
    return <primitive object={scnee} scale={1} />;
};

function EarthCanvas() {
    return (
        <Canvas
            frameloop='demand'
            gl={{ preserveDrawingBuffer: true }}
            camera={{ position: [5, 3, 1], fov: 221, near: 0.1, far: 200 }}
        >
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 0, 0.05]} />
            <Suspense fallback=''>
                <OrbitControls
                    autoRotate
                    autoRotateSpeed={3}
                    enableZoom={true}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <EarthModel></EarthModel>
            </Suspense>
        </Canvas>
    );
}

export default EarthCanvas;
