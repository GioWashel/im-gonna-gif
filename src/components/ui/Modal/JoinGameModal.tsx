import { Modal, Box,  TextField, CircularProgress, LinearProgress} from '@mui/material';
import { width } from '@mui/system';
import { useState } from 'react';
interface HostGameModalProps {
    shouldShowModal: boolean;
    setShouldShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  }

function JoinGameModal({shouldShowModal, setShouldShowModal}: HostGameModalProps) {
    const [gameCd, setGameCd] = useState(""); 
    const [isLoading, setIsLoading] = useState(false); 
    const joinGame = () => {

        setIsLoading(true);
    }
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
            boxShadow: 200,
            gap: '1rem',
            p: 4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}>
            <h2 style={{color: 'black'}}>Join a game!</h2>
            <TextField style={{width: '100%'}}type='text' value={gameCd} placeholder='Enter 4 character game code' onChange={(e) => setGameCd(e.target.value)}/>
            <button style={{width: '100%'}} onClick={joinGame}>Submit</button>
            {isLoading ? (<img src="https://media1.tenor.com/m/jfmI0j5FcpAAAAAd/loading-wtf.gif" width={100}></img>) : <></>}
            </Box>
        </Modal>
        </div>
    );
}
export default JoinGameModal; 