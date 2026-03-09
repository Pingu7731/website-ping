import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
// import { useIsMobile } from "../isMobile";
import { useMediaQuery } from "react-responsive";
// import { div } from "three/tsl";

export const HeroExperience= () => {
    // const isMobile= useMediaQuery({ query: '(max-width: 768px)' });
    const isTablet= useMediaQuery({ query: '(max-width: 1024px)' });

return(
    // <div className="text-white">
    //     test {isMobile ? "mobile" : "desktop"}
    // </div>
    <Canvas camera={{position:[0,0,15],fov:45}}>
        <ambientLight intensity={0.5} color="#1a1a40" />
        <directionalLight position={[20,15,10]} intensity={5} />
        {/* to control how user can rotate */}
        <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        enableRotate={true}
        maxDistance={20}
        minDistance={10}
        minPolarAngle={Math.PI/5}
        maxPolarAngle={Math.PI/2}
        />

        {/* the box */}
        <mesh>
            <boxGeometry args={[5,5,5]} />
            <meshStandardMaterial color="purple" />
        </mesh>
    </Canvas>
)

}
export default HeroExperience;


// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import { useMediaQuery } from "react-responsive";

// const HeroExperience: React.FC = () => {
//   const isTablet: boolean = useMediaQuery({ query: "(max-width: 1024px)" });

//   return (
//     <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
//       <ambientLight intensity={0.5} color="#1a1a40" />
//       <directionalLight position={[20, 15, 10]} intensity={5} />

//       <OrbitControls
//         enablePan={false}
//         enableZoom={!isTablet}
//         enableRotate={true}
//         maxDistance={20}
//         minDistance={10}
//         minPolarAngle={Math.PI / 5}
//         maxPolarAngle={Math.PI / 2}
//       />

//       <mesh>
//         <boxGeometry args={[5, 5, 5]} />
//         <meshStandardMaterial color="purple" />
//       </mesh>
//     </Canvas>
//   );
// };

// export default HeroExperience;