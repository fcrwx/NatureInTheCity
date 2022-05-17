import {Box} from "@mui/material";
import React from "react";
import {score} from "./interfaces/score";

function GameScore(props: { gameScore: score }) {
    return (
        <Box sx={{gap: 2}} className="game-score">
            <Box sx={{gap: 2, m: 1, p: 1, display: "inline-flex", flexDirection: "row"}} className="correct">
                <div className="label">Correct:</div>
                <div className="value">{props.gameScore?.correct}</div>
            </Box>
            <Box sx={{gap: 2, m: 1, p: 1, display: "inline-flex", flexDirection: "row"}} className="correct">
                <div className="label">Incorrect:</div>
                <div className="value">{props.gameScore?.incorrect}</div>
            </Box>
            <Box sx={{gap: 2, m: 1, p: 1, display: "inline-flex", flexDirection: "row"}} className="correct">
                {
                    (props.gameScore.correct + props.gameScore.incorrect > 0) &&
                    <div className="label">
                        {
                            Math.round((props.gameScore.correct / (props.gameScore.correct + props.gameScore.incorrect)) * 100)
                        }%
                    </div>
                }
            </Box>
        </Box>
    );
}

export default GameScore;
