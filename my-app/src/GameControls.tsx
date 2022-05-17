import {Box, Button} from "@mui/material";
import './GameControls.scss';
import React from "react";
import {ThumbDown, ThumbUp} from "@mui/icons-material";
import {Bird} from "./interfaces/bird";

function GameControls(props: { gameInProgress: boolean, prevAnswer: Bird | undefined, prevAnswerCorrect: boolean | undefined, onClickStop: () => void, onClickStart: () => void }) {
    return (
        <Box sx={{gap: 2, m: 1, p: 1, display: "inline-flex", flexDirection: "row"}} className="game-controls">
            {
                props.gameInProgress ?
                    <div><Button variant="outlined" onClick={props.onClickStop}>Stop</Button></div> :
                    <div><Button variant="contained" onClick={props.onClickStart}>Start</Button></div>
            }
            <div className="previous-answer">
                {
                    props.gameInProgress && (props.prevAnswerCorrect !== undefined) && (
                        props.prevAnswerCorrect ?
                            <Box sx={{gap: 2, display: "inline-flex", flexDirection: "row"}}>
                                <ThumbUp className="thumb-up"></ThumbUp>
                            </Box> :
                            <Box sx={{gap: 2, display: "inline-flex", flexDirection: "row"}}>
                                <ThumbDown className="thumb-down"></ThumbDown>
                                <div className="correct-answer">Sorry, the correct answer was: {props.prevAnswer?.name}</div>
                            </Box>
                    )
                }
            </div>
        </Box>
    );
}

export default GameControls;
