import { Center, Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";



type prop = {
    name: string;
    iconPath: string;
    scale: number;
    rotation: [number, number, number];
}

const SocialIcon = ({ models }: { models: prop }) => {

    const scene = useGLTF(models.iconPath);

    return (
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={1} />
            {/* <directionalLight position={[5, 5, 5]} intensity={1} /> */}
            <Environment preset="city" />
            <OrbitControls enableZoom={false} />
            <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
                <Center>
                    <group scale={models.scale} rotation={models.rotation}>
                        <primitive object={scene.scene} />
                    </group>
                </Center>
            </Float>

        </Canvas>
    )

}
export default SocialIcon