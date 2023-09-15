import React, { useEffect, useState } from 'react';
import { Howl } from 'howler';
import FrenzyTarget from './FrenzyTarget';
interface IProps {
  mapSize: number;
  targetSize: number;
  gameStatus: boolean;
  frenzyTargets: boolean[];
  setFrenzyTargets: React.Dispatch<React.SetStateAction<boolean[]>>;
  setGameStatus: React.Dispatch<React.SetStateAction<boolean>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  frenzyDiff: string;
}

const FrenzyTargets: React.FC<IProps> = ({
  setScore,
  mapSize,
  targetSize,
  gameStatus,
  setGameStatus,
  frenzyDiff,
  frenzyTargets,
  setFrenzyTargets,
}) => {
  const [counter, setCounter] = useState<number>(0);
  const [frenzyCounter, setFrenzyCounter] = useState<number>(0);
  const endGameSound = new Howl({
    src: [require('../Sounds/end.wav')],
    volume: 0.1,
  });

  const difficultyTime = (): number | undefined => {
    if (frenzyDiff === 'easy') {
      return 500;
    } else if (frenzyDiff === 'normal') {
      return 400;
    } else if (frenzyDiff === 'hardcore') {
      return 300;
    }
  };
  useEffect(() => {
    const myInterval = () => {
      if (frenzyCounter < 5) {
        setFrenzyTargets([...frenzyTargets, true]);
        setCounter(prev => prev + 1);
        setFrenzyCounter(prev => prev + 1);
      } else if (frenzyCounter >= 5) {
        endGameSound.play();
        setFrenzyTargets([]);
        setFrenzyCounter(0);
        setCounter(0);
        setGameStatus(false);
        clearInterval(interval);
      }
    };
    const interval = setInterval(myInterval, difficultyTime());

    return () => {
      clearInterval(interval);
    };
  }, [counter]);

  const hitTargetSound = new Howl({
    src: [require('../Sounds/hittarget.wav')],
    volume: 0.2,
  });

  return (
    <div>
      {frenzyTargets.map((target, idx = 0) => {
        return (
          <FrenzyTarget
            key={idx}
            setScore={setScore}
            mapSize={mapSize}
            targetSize={targetSize}
            setFrenzyTargets={setFrenzyTargets}
            frenzyTargets={frenzyTargets}
            setFrenzyCounter={setFrenzyCounter}
            hitTargetSound={hitTargetSound}
          />
        );
      })}
    </div>
  );
};

export default FrenzyTargets;
