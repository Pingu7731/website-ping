// import * as THREE from "three"
const HeroLights = () => {
    return (
        <>
            <spotLight position={[1, 5, 5]}
                intensity={100}
                angle={1.5}
                penumbra={1}
            />
            <spotLight position={[1, 5, 5]}
                intensity={60}
                angle={0.4}

                penumbra={1}// blur
                color="9d4edd"
            />
            {/* <primitive
                object={new THREE.RectAreaLight('#A259FF')}
                position={[0, 1, 0]}
                intensity={15}
                rotation={[4, 20, 0]}
            /> */}

        </>
    )
}
export default HeroLights