import React, {useEffect, useState} from 'react';
import './App.scss';
import allBirdData from './birds.json';
import {score} from './interfaces/score';
import GameControls from './GameControls';
import GameScore from './GameScore';
import GameQuestion from "./GameQuestion";
import {Bird} from "./interfaces/bird";

function App() {
    const newScore: score = {
        correct: 0,
        incorrect: 0
    };

    const [gameInProgress, setGameInProgress] = useState(false);
    const [gameScore, setGameScore] = useState(newScore);
    const [bird, setBird] = useState<Bird>();
    const [prevAnswer, setPrevAnswer] = useState<Bird | undefined>();
    const [prevAnswerCorrect, setPrevAnswerCorrect] = useState<boolean | undefined>(undefined);

    const resetGameScore = () => {
        setPrevAnswer(undefined);
        setPrevAnswerCorrect(undefined);
        setGameScore(newScore);
    }

    const startGame = () => {
        resetGameScore();
        getRandomBird();
        setGameInProgress(true);
    }

    const endGame = () => {
        setGameInProgress(false);
    }

    const getRandomBird = () => {
        const index = Math.floor(Math.random() * allBirdData.length);
        const selectedBird: Bird = allBirdData[index];
        setBird(selectedBird);
    }

    const handleSelection = (selectedBird: Bird) => {
        const updatedScore: score = {
            correct: gameScore.correct,
            incorrect: gameScore.incorrect
        };

        const answerCorrect = selectedBird.code === bird?.code;
        answerCorrect ? updatedScore.correct++ : updatedScore.incorrect++;
        setPrevAnswer(bird);
        setPrevAnswerCorrect(answerCorrect);
        setGameScore(updatedScore);
        getRandomBird();
    }

    useEffect(() => {
        console.log(`start`);
    }, [gameInProgress, gameScore, bird]);

    return (
        <div className="App">
            <GameControls gameInProgress={gameInProgress} prevAnswer={prevAnswer} prevAnswerCorrect={prevAnswerCorrect} onClickStop={() => endGame()} onClickStart={() => startGame()}/>
            <GameScore gameScore={gameScore}/>
            <GameQuestion gameInProgress={gameInProgress} allBirds={allBirdData} bird={bird} onSelect={handleSelection}/>
        </div>
    );
}

export default App;
