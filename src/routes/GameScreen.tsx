
import { useParams } from "react-router";
const GameScreen = () => {

    const {gameCd} = useParams(); 
    return(
    <div>
        <h2>GameCd: {gameCd}</h2>
    </div>);
}
export default GameScreen; 