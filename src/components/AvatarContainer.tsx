import { Environment, OrbitControls } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { Sound } from "./Sound";

type Props = {
  onStartDancing?: () => void;
  onStopDancing?: () => void;
};

function AvatarContainer(props: Props) {
  return (
    <>
      <OrbitControls />
      <ambientLight />
      <directionalLight
        position={[-5, 5, 5]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <group position={[0, -1, 0]}>
        <Avatar
          onStartDancing={props.onStartDancing}
          onStopDancing={props.onStopDancing}
        />
      </group>
      <mesh
        rotation={[-0.5 * Math.PI, 0, 0]}
        position={[0, -1, 0]}
        receiveShadow
      >
        <planeGeometry args={[10, 10, 1, 1]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
      <Environment preset="sunset" />
      <Sound url="/sounds/3982886995.mp3" />
    </>
  );
}

export default AvatarContainer;
