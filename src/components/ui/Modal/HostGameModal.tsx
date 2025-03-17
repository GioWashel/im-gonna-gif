import React, { useState } from 'react';
import { Modal, Box, TextField, Button, Select, MenuItem, FormControl, InputLabel, RadioGroup, FormControlLabel, FormLabel, Radio } from '@mui/material';

interface HostGameModalProps {
    shouldShowModal: boolean;
    setShouldShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

enum GameMode {
    TEXT_ONLY = "Text Only",
    GIF_ONLY = "GIF Only",
    TEXT_REACT_GIF = "Text React GIF",
    GIF_REACT_GIF_AND_AUDIO = "GIF React GIF and Audio"
}

function HostGameModal({ shouldShowModal, setShouldShowModal }: HostGameModalProps) {
    const [gameName, setGameName] = useState("");
    const [gameMode, setGameMode] = useState<GameMode>(GameMode.TEXT_REACT_GIF);
    const [timePerRound, setTimePerRound] = useState(60); // Default to 60 seconds
    const [maxRounds, setMaxRounds] = useState(5); // Default to 5 rounds

    const handleCreateGame = () => {
        // Here you would typically make an API call to create the game
        const newGame = {
            sessionId: Math.random().toString(36).substr(2, 9), // Generate a random session ID
            joinCd: Math.random().toString(36).substr(2, 4).toUpperCase(), // Generate a random 4-character join code
            currentPlayers: [],
            isPublic: true,
            noDeck: false,
            gameMode,
            currentDeck: null,
            rounds: [],
            timePerRound,
            currentCzar: null,
            currentRound: 0,
            maxRounds,
            winners: [],
            startedAt: new Date(),
            endedAt: null,
            scores: new Map()
        };

        console.log("New Game Created:", newGame);
        setShouldShowModal(false);
    };

    return (
        <div>
            <Modal
                open={shouldShowModal}
                onClose={() => setShouldShowModal(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    width: 400
                }}>
                    <h2 style={{color: 'black'}}> 
                        Host a Game!
                    </h2>
                    <TextField
                        style={{ width: '100%', marginBottom: 20 }}
                        type="text"
                        value={gameName}
                        placeholder="Enter Game Name"
                        onChange={(e) => setGameName(e.target.value)}
                    />
                    <FormControl fullWidth style={{ marginBottom: 20 }}>
                        <InputLabel id="game-mode-label">Game Mode</InputLabel>
                        <Select
                            labelId="game-mode-label"
                            value={gameMode}
                            label="Game Mode"
                            onChange={(e) => setGameMode(e.target.value as GameMode)}
                        >
                            {Object.values(GameMode).map((mode) => (
                                <MenuItem key={mode} value={mode}>{mode}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <TextField
                        style={{ width: '100%', marginBottom: 20 }}
                        type="number"
                        value={timePerRound}
                        label="Time Per Round (seconds)"
                        onChange={(e) => setTimePerRound(parseInt(e.target.value))}
                    />
                    <TextField
                        style={{ width: '100%', marginBottom: 20 }}
                        type="number"
                        value={maxRounds}
                        label="Times each person is Czar"
                        onChange={(e) => setMaxRounds(parseInt(e.target.value))}
                    />
                    <FormControl fullWidth style={{ marginBottom: 20, display: 'flex', justifyContent: 'center' }}>
                        <FormLabel color='success' id="demo-row-radio-buttons-group-label"></FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            sx={{color: 'black'}}
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Public" />
                            <FormControlLabel value="male" control={<Radio />} label="Private" />
                        </RadioGroup>
                    </FormControl>
                    <Button variant="contained" color="success" onClick={handleCreateGame}>
                        Create Game
                    </Button>
                </Box>
            </Modal>
        </div>
    );
}

export default HostGameModal;