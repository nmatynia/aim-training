import React, { useRef, useState } from 'react';
import { Howl } from 'howler';
interface IProps {
  mapSize: number;
  targetSize: number;
  frenzyTargets: boolean[];
  hitTargetSound: Howl;
  setFrenzyCounter: React.Dispatch<React.SetStateAction<number>>;
  setFrenzyTargets: React.Dispatch<React.SetStateAction<boolean[]>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}

const FrenzyTarget: React.FC<IProps> = ({
  setScore,
  mapSize,
  targetSize,
  hitTargetSound,
  setFrenzyCounter,
}) => {
  const randomizePosition = (): number => {
    const maxPosition = mapSize - targetSize;
    const number = Math.floor(Math.random() * maxPosition);
    return number;
  };

  const [posX, setPosX] = useState<number>(randomizePosition);
  const [posY, setPosY] = useState<number>(randomizePosition);
  const frenzyTargetRef = useRef<any>();

  const handleClick = () => {
    return () => {
      hitTargetSound.play();
      setScore(prevState => prevState + 1);
      frenzyTargetRef.current.remove();
      setFrenzyCounter(prev => prev - 1);
    };
  };

  return (
    <div
      className="target"
      ref={frenzyTargetRef}
      onClick={handleClick()}
      style={{
        left: `${posX}vh`,
        top: `${posY}vh`,
        width: `${targetSize}vh`,
        height: `${targetSize}vh`,
      }}
    ></div>
  );
};

export default FrenzyTarget;
