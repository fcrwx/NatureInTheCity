import React from "react";
import {Bird} from "./interfaces/bird";
import {Box, Button} from "@mui/material";
import './GameQuestion.scss';

function GameQuestion(props: { gameInProgress: boolean, allBirds: Bird[], bird: Bird | undefined, onSelect: Function }) {

    if (props.gameInProgress && props.bird) {
        return (
            <Box sx={{gap: 2, m: 1, p: 1, display: "inline-flex", flexDirection: "row"}}>
                <Box sx={{gap: 2, m: 1, p: 1, display: "inline-flex", flexDirection: "column"}}>
                    {props.allBirds.map((bird) => (
                        <Button key={bird.code} variant="contained" onClick={() => props.onSelect(bird)}>{bird.name}</Button>
                    ))}
                </Box>
                <Box sx={{gap: 2, m: 1, p: 1, display: "inline-flex", flexDirection: "column"}}>
                    {props.bird.calls.map((call) => (
                        <Box key={call.src} sx={{gap: 2, m: 1, p: 1, display: "inline-flex", flexDirection: "row"}}>
                            <div className="audio-label">{call.type.toLocaleUpperCase()}</div>
                            <div className="audio-player">
                                <audio controls>
                                    <source src={call.src}/>
                                </audio>
                            </div>
                        </Box>
                    ))}
                    {/*<div>Answer: {props.bird.code} - {props.bird.name}</div>*/}
                </Box>
            </Box>
        );
    }

    return <div></div>
}

export default GameQuestion;
