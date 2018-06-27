import React from 'react';
import './App.css';
import Posts from './PostPage';
import GameBoard from '../SearchBar/GameBoard';
import PlayerCards from './PlayerCards';
import {Link} from "react-router-dom";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.PostShuffle(Posts);
        let PlayerCards=Posts.slice(0,10);
        let OpponentCards=Posts.slice(10,16);
        let CurrentCardIndex=Math.floor(Math.random()*PlayerCards.length);
        let CurrentCard= PlayerCards[CurrentCardIndex];
        let OpponentCardIndex=Math.floor(Math.random()*OpponentCards.length);
        let OpponentCurrentCard= OpponentCards[OpponentCardIndex];
        this.Draw = this.Draw.bind(this);
        this.OpponentDraw = this.OpponentDraw.bind(this);
        this.ShufflePlayerCards= this.ShufflePlayerCards.bind(this);
        this.state = {
            currentPost: Posts[Math.floor(Math.random()*Posts.length)],
            OpponentCards: OpponentCards,
            PlayerCards: PlayerCards,
            CurrentCard: CurrentCard,
            CurrentCardIndex: CurrentCardIndex,
            OpponentCurrentCard: OpponentCurrentCard,
            OpponentCardIndex: OpponentCardIndex,
        }
    }

    PostShuffle(Posts) {
        var currentIndex = Posts.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = Posts[currentIndex];
            Posts[currentIndex] = Posts[randomIndex];
            Posts[randomIndex] = temporaryValue;
        }

    }

    ShufflePlayerCards(){
        this.setState(prevState => {
            let ShuffledCards = JSON.parse(JSON.stringify(prevState.PlayerCards));
            this.PostShuffle(ShuffledCards);
            return {PlayerCards: ShuffledCards}
        })
    }

    Draw(){
        let CurrentCardIndex=Math.floor(Math.random()*this.state.PlayerCards.length);
        let CurrentCard= this.state.PlayerCards[CurrentCardIndex];
        this.setState({
            CurrentCard:CurrentCard,
            CurrentCardIndex:CurrentCardIndex,
        })
    }

    OpponentDraw(){
        let OpponentCardIndex=Math.floor(Math.random()*this.state.OpponentCards.length);
        let OpponentCurrentCard= this.state.OpponentCards[OpponentCardIndex];
        this.setState({
            OpponentCurrentCard:OpponentCurrentCard,
            OpponentCardIndex:OpponentCardIndex,
        })
    }

    render() {
        return (
            <div className="App">
                <h1>Trump Scandal Top Trumps</h1>
                <GameBoard PlayerCards={this.state.PlayerCards}
                           CurrentCard={this.state.CurrentCard}
                           OpponentCurrentCard={this.state.OpponentCurrentCard}
                            ShufflePlayerCards={this.ShufflePlayerCards}
                            Draw={this.Draw}
                            OpponentDraw={this.OpponentDraw}/>
                <PlayerCards CurrentCardID={this.state.CurrentCard.id}
                             CurrentCardIndex={this.state.CurrentCardIndex}
                             Cards={this.state.PlayerCards}/>
                <div className='Footer'>
                    <p>Site by <a href={'https://twitter.com/neilhaffenden'} target="_blank" rel="noopener" className="link">Neil Haffenden</a> made using <a href={'https://reactjs.org/'} target="_blank" rel="noopener" className="link">React</a></p>
                </div>
            </div>
        );
    }
}

export default App;
