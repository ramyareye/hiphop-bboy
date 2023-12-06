import { Canvas } from "@react-three/fiber";
import AvatarContainer from "./components/AvatarContainer";
import { CameraControls } from "@react-three/drei";
import { useRef } from "react";

function App() {
  const cameraControlRef = useRef<CameraControls | null>(null);

  return (
    <div className="w-screen h-screen">
      <Canvas shadows camera={{ position: [1, 1.5, 2.5], fov: 50 }}>
        <color attach="background" args={["#f2f7ff"]} />
        <CameraControls ref={cameraControlRef} />
        <AvatarContainer
          onStartDancing={() =>
            cameraControlRef.current?.rotate(-Math.PI / 2, Math.PI / 9, true)
          }
          onStopDancing={() => cameraControlRef.current?.reset()}
        />
      </Canvas>
      <div className="absolute top-0 left-0 p-4 flex items-center space-x-1">
        <p>To start/stop breaking, press</p>
        <kbd className="px-2 bg-gray-300 text-gray-700 rounded-md border-t-[1px] border-x-[3px] border-b-[4px] border-l-[#e6e6e6] border-t-[#e6e6e6] border-r-[#bebebe] border-b-[#bebebe]">
          Space
        </kbd>
      </div>
    </div>
  );
}

export default App;
