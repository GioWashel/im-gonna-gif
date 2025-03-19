import JoinCard from "./JoinCard";
import './JoinCardList.css'
const JoinGameList = () => {
    const data = [
        {
            gameName: 'Game with Gifs',
            gameDescription: 'A fun and challenging game for all ages.',
            numPlayers: 5,
            gameMode: 'Gif React Gif',
        },
        {
            gameName: 'Yo mamas bootyhole',
            gameDescripton: 'Embark on an epic adventure in a magical world.',
            numPlayers: 2,
            gameMode: 'Gif React Gif',

        },
        {
            gameName: 'Sigma Sigma SigmaSigma Sigms',
            gameDescription: 'Command your fleet and conquer the galaxy.',
            numPlayers: 3,
            gameMode: 'Gif React Gif',

        },
        {
            gameName: 'PEEEETAH',
            gameDescription: 'Explore dark dungeons and defeat terrifying monsters.',
            numPlayers: 10,
            gameMode: 'Gif React Gif',

        },
        {
            gameName: 'AWOOOOOOOOOGA',
            gameDescription: 'Hack, steal, and outsmart your enemies in a futuristic city.',
            numPlayers: 8,
            gameMode: 'Gif React Gif',

        },
        {
            gameName: 'AAEEEEEEAEEAEAAE',
            gameDescription: 'Sail the high seas and become the most feared pirate.',
            numPlayers: 7,
            gameMode: 'Gif React Gif',

        },
        {
            gameName: 'i pooed',
            gameDescription: 'Survive the undead horde in a post-apocalyptic world.',
            numPlayers: 10,
            gameMode: 'Gif React Gif',

        },
        {
            gameName: 'bruh sound effect',
            gameDescription: 'Discover new planets and unravel the mysteries of the universe.',
            numPlayers: 7,
            gameMode: 'Gif React Gif',

        },
        {
            gameName: 'Game',
            gameDescription: 'Build your kingdom and lead your people to glory.',
            numPlayers: 9,
            gameMode: 'Gif React Gif',

        },
        {
            gameName: 'Game',
            gameDescription: 'Compete in high-speed races and claim the championship.',
            numPlayers: 5,
            gameMode: 'Gif React Gif',
        }
    ];

    return (
        <div className="join-card-container">
            {data.map((card, index) => <JoinCard key={index} gameName={card.gameName} numPlayers={card.numPlayers} gameMode={card.gameMode} />)}
        </div>
    )
}
export default JoinGameList; 