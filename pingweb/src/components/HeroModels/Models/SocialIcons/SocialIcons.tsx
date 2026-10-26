import { Center, Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { useInView } from "react-intersection-observer";



type prop = {
    name: string;
    iconPath: string;
    scale: number;
    rotation: [number, number, number];
}

const Model = ({ models }: { models: prop }) => {

    const scene = useGLTF(models.iconPath);

    return (
        <group scale={models.scale} rotation={models.rotation}>
            <primitive object={scene.scene} />
        </group>
    )
}

const SocialIcon = ({ models }: { models: prop }) => {
    // create the canvas a bit before it reach the screen (only once)
    const { ref: mountRef, inView: mounted } = useInView({ rootMargin: "600px 0px", triggerOnce: true });
    // only animate when on screen, 5 canvas running all the time is very heavy for phone
    const { ref: visibleRef, inView: visible } = useInView({ rootMargin: "100px 0px" });

    return (
        <div ref={(el) => { mountRef(el); visibleRef(el); }} className="w-full h-full">
            {mounted && (
                // useGLTF suspend while loading, keep it inside here so it doesnt block the whole page
                <Suspense fallback={null}>
                    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} frameloop={visible ? "always" : "demand"}>
                        <ambientLight intensity={1} />
                        {/* <directionalLight position={[5, 5, 5]} intensity={1} /> */}
                        <Environment preset="city" />
                        <OrbitControls enableZoom={false} />
                        <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
                            <Center>
                                <Model models={models} />
                            </Center>
                        </Float>

                    </Canvas>
                </Suspense>
            )}
        </div>
    )

}
export default SocialIcon
