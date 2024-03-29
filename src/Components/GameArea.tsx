import React, { useRef, useState } from 'react';
import '../Styles/GameArea.css';
import Timer from './Timer';
import { FaSyncAlt } from 'react-icons/fa';
import { FaExclamationCircle } from 'react-icons/fa';
//Sound
import { Howl } from 'howler';
//Gamemodes
import Target from './Target';
import FrenzyTargets from './FrenzyTargets';
import Trio from './Trio';

interface IProps {
  score: number;
  targetSize: number;
  mapSize: number;
  time: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  gameStarting: boolean;
  setGameStarting: React.Dispatch<React.SetStateAction<boolean>>;
  gameStatus: boolean;
  setGameStatus: React.Dispatch<React.SetStateAction<boolean>>;
  gameMode: string;
  setFrenzyDiff: React.Dispatch<React.SetStateAction<string>>;
  frenzyDiff: string;
}

const GameArea: React.FC<IProps> = ({
  setScore,
  score,
  targetSize,
  mapSize,
  time,
  gameStarting,
  setGameStarting,
  gameStatus,
  setGameStatus,
  gameMode,
  frenzyDiff,
}) => {
  const missedClicks = useRef(0);
  const [frenzyTargets, setFrenzyTargets] = useState<boolean[]>([]);

  const startGameSound = new Howl({
    src: [require('../Sounds/start.ogg')],
    volume: 0.2,
  });

  const gameStart: JSX.Element = (
    <div
      className="gameStart"
      style={{
        left: `${(mapSize - 30.9498) / 2}vh`,
        top: `${(mapSize - 7.7908) / 2}vh`,
      }}
    >
      <div className="startButton" onClick={() => setGameStarting(false)}>
        START
      </div>
      <div className="tip">
        <FaSyncAlt />
        click alt + b for restart
      </div>
    </div>
  );

  const startingTarget: JSX.Element = (
    <div
      className="target"
      onClick={() => {
        startGameSound.play();
        setGameStatus(true);
        setScore(1);
        missedClicks.current = 0;
        setFrenzyTargets([]);
      }}
      style={{
        left: `${(mapSize - targetSize) / 2}vh`,
        top: `${(mapSize - targetSize) / 2}vh`,
        width: `${targetSize}vh`,
        height: `${targetSize}vh`,
      }}
    ></div>
  );

  const formattedTime: string =
    time > 59
      ? `${Math.floor(time / 60)}:${
          time % 60 >= 10 ? time % 60 : `0${time % 60}`
        }`
      : time >= 10
      ? `0:${time}`
      : `0:0${time}`;

  const calculatedAccuracy =
    Math.round((score / (score + missedClicks.current)) * 100 * 100) / 100;

  const modeDisplay = () => {
    if (gameMode === 'classic') {
      return (
        <Target setScore={setScore} mapSize={mapSize} targetSize={targetSize} />
      );
    } else if (gameMode === 'frenzy') {
      return (
        <FrenzyTargets
          setScore={setScore}
          mapSize={mapSize}
          targetSize={targetSize}
          gameStatus={gameStatus}
          setGameStatus={setGameStatus}
          frenzyDiff={frenzyDiff}
          frenzyTargets={frenzyTargets}
          setFrenzyTargets={setFrenzyTargets}
        />
      );
    } else if (gameMode === 'trio') {
      return (
        <Trio
          setScore={setScore}
          mapSize={mapSize}
          targetSize={targetSize}
          gameStatus={gameStatus}
        />
      );
    }
  };

  return (
    <div
      className="GameArea"
      style={{ width: `${mapSize}vh`, height: `${mapSize}vh` }}
    >
      {gameStarting ? gameStart : gameStatus ? modeDisplay() : startingTarget}

      <div
        className="accuracyCounter"
        onClick={() => (missedClicks.current = missedClicks.current + 1)}
      ></div>

      <div className="score">SCORE: {score}</div>
      {gameStarting || !gameStatus ? (
        <div className="timer">{formattedTime}</div>
      ) : (
        <Timer time={time} setScore={setScore} setGameStatus={setGameStatus} />
      )}
      {!gameStarting && !gameStatus ? (
        <div className="accuracy">
          ACCURACY: {!isNaN(calculatedAccuracy) ? calculatedAccuracy : '0'}%
        </div>
      ) : null}
    </div>
  );
};

export default GameArea;
