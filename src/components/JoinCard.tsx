import { Card, CardActions, CardContent, Typography, Chip, Avatar } from "@mui/material";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { NavLink } from "react-router";
interface JoinCardProps {
    gameName: string, 
    numPlayers: number,
    gameMode: string,
    gameCd: string, 
}
const JoinCard = ({ gameName, numPlayers, gameMode, gameCd }: JoinCardProps) => {
    
    return (
    <Card className='JoinCard' sx={{ maxWidth: '320px', backgroundColor: '#333', borderRadius: 10}}> 
        <CardContent>
            <Typography sx={{ display: '-webkit-box', 
                    WebkitBoxOrient: 'vertical', 
                    WebkitLineClamp: 2, // Limit to 2 lines
                    overflow: 'hidden', 
                    textOverflow: 'ellipsis',
                    lineHeight: 1.5}} variant="h3" color='#9adcf2' fontFamily={"Comic Sans MS"}>{gameName}</Typography>
        </CardContent> 
        <CardContent sx={{display: 'flex', justifyContent: 'space-evenly' }}>
            <Chip sx={{backgroundColor: 'pink', fontFamily: 'Comic Sans MS'}} label={numPlayers} avatar={<Avatar sx={{bgcolor: 'white', }}/>}/>
            <Chip sx={{backgroundColor: 'orange', fontFamily: 'Comic Sans MS'}} label={gameMode} avatar={<Avatar sx={{bgcolor: 'white', fontFamily: 'Comic Sans MS'}}><SportsEsportsIcon/></Avatar>}/>
        </CardContent>
        <CardActions>
            <NavLink className='button' to={`/game/${gameCd}`}  style={{backgroundColor: '#05f682', color: 'black', width: '100%' }}>JOIN</NavLink>
        </CardActions>
    </Card>);

}
export default JoinCard; 