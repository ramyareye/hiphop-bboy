import { useLoader, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export function Sound({ url }: { url: string }) {
  const sound = useRef<THREE.PositionalAudio | null>(null);

  const { camera } = useThree();
  const [listener] = useState(() => new THREE.AudioListener());
  const buffer = useLoader(THREE.AudioLoader, url);

  useEffect(() => {
    return () => {
      camera.remove(listener);
    };
  });

  const playSong = () => {
    sound.current?.setBuffer(buffer);
    sound.current?.setRefDistance(1);
    sound.current?.setLoop(true);
    sound.current?.setVolume(0.5);
    sound.current?.play();
    camera.add(listener);
  };

  const stopSong = () => {
    sound.current?.stop();
  };

  const handleKeyboardEvent = (event: Event) => {
    if (!(event instanceof KeyboardEvent)) return;
    if (event.code !== "Space") return;
    if (sound.current?.isPlaying) {
      stopSong();
    } else {
      playSong();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboardEvent);
    return () => document.removeEventListener("keydown", handleKeyboardEvent);
  });

  return <positionalAudio ref={sound} args={[listener]} />;
}
