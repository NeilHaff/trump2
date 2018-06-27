import React from 'react';
import './GameBoard.css';

import Popup from '../App/popup.js';
import CardsBar from '../Bar/CardsBar';

class GameBoard extends React.Component {
    constructor(props){
        super(props);
        this.state = {showGif: false, LostGuess: false, percent:95, gifSrc:'', popupHidden: false, status:'', selectedProperty:null, moves:0, };
        this.compareCards = this.compareCards.bind(this);
        this.resetGame = this.resetGame.bind(this);
        this.startGame = this.startGame.bind(this);
        this.resumeGame= this.resumeGame.bind(this);
        this.renderScorefBox = this.renderScorefBox.bind(this);
        this.showGifBox = this.showGifBox.bind(this);
    }

    startGame(){
        this.setState({showGif: false, LostGuess: false, percent:40, gifSrc:'', popupHidden: true, status:'', moves:0, });
    }

    resumeGame(){
        if (this.status ==='lose'){
            this.setState({popupHidden: false,});
        }
        else{
            this.setState({popupHidden: true, status:'', });
        }
    }

    renderScorefBox(){
        const allowedproperties = ['Impeachment', 'Illegality', 'Involvement', 'Media']
            return (
                <div>
                <div className='GifBoxBack'  >
                    <div className='ScoreBoard'>
                        <h1>{this.state.statements}  </h1>
                            <div className='PlayedCard'>
                            <h2>{this.props.CurrentCard.title}</h2>
                                {Object.keys(this.props.CurrentCard).filter(property => allowedproperties.includes(property)).map(property => {
                                    return <h4 key={property} className={(property === this.state.selectedProperty) ? 'highlighted' : ''}>{property} - {this.props.CurrentCard[property]}</h4>
                                })}
                            </div>
                        <div className='OppCard'>
                            <h2>{this.props.OpponentCurrentCard.title}</h2>
                            {Object.keys(this.props.OpponentCurrentCard).filter(property => allowedproperties.includes(property)).map(property => {
                                return <h4 key={property} className={(property === this.state.selectedProperty) ? 'highlighted' : ''}>{property} - {this.props.OpponentCurrentCard[property]}</h4>
                            })}
                        </div>
                        <div className='MoveBox'>
                        <h2>{this.state.moves} move(s)</h2>
                        </div>
                    </div>
                </div>
                 </div>
            );
    }



    determineGifSrc () {
        switch (this.state.percent) {
            case 100:
                this.setState({gifSrc: 'image/pencekiss.gif' });
                this.setState({popupHidden: false});
                this.setState({status:'win'});
                break;
            case 85:
                this.setState({gifSrc: 'image/yeahgif.gif'});
                break;
            case 65:
                this.setState({gifSrc: 'image/ezgif.com-video-to-gif.gif'});
                break;
            case 45:
                this.setState({gifSrc: 'image/confusedtrump.gif'});
                break;
            case 20:
                this.setState({gifSrc: 'image/internetgif.gif'});
                break;
            case 5:
                this.setState({gifSrc: 'image/wrong-gif (5).gif'});
                break;
            case 0:
                this.setState({status:'lose'});
                break;
            default:
                this.setState({gifSrc: null});
        }

            }


    compareCards(valueOne, valueTwo) {
        let win = valueOne >= valueTwo;
        if (win) {
            this.setState(prevState => {
                return {
                    playerwin: true,
                    playerlose: false,
                    percent: prevState.percent + 5,
                    showGif: true,
                    statements: 'You win',
                    LostGuess: true,
                    moves: prevState.moves + 1,
                }
            }, this.determineGifSrc)
            //move cards
        } else {
            this.setState(prevState => {
                return {
                    playerlose: true,
                    playerwin: false,
                    LostGuess: true,
                    percent: prevState.percent - 5,
                    showGif: true,
                    statements: 'You lose',
                    moves: prevState.moves + 1,
                }
            }, this.determineGifSrc);
        }

        setTimeout(this.resetGame, 3800)
    }



    showGifBox(){
        if (this.state.percent === 5 || this.state.percent === 10 || this.state.percent === 15 || this.state.percent === 25
            || this.state.percent === 30 || this.state.percent === 35 || this.state.percent === 40 || this.state.percent === 50 ||
            this.state.percent === 55 || this.state.percent === 60 || this.state.percent === 70 || this.state.percent === 75
            || this.state.percent === 80 || this.state.percent === 90 || this.state.percent === 95

        )
         {
            console.log('should NOT show the gif');
        } else {
            console.log('should be using the showgifbox function')
            this.setState({popupHidden: false});
            }
    }


    resetGame() {
        this.setState({playerlose: false, showGif: false, LostGuess: false});
        this.props.Draw()
        this.props.OpponentDraw()
        this.showGifBox()

    }

    handleScoreClick(stat) {
        this.compareCards(this.props.CurrentCard[stat], this.props.OpponentCurrentCard[stat]);
        this.setState({selectedProperty: stat});

    }


        render() {
        return (
            <div>
                <Popup startGame={this.startGame}
                       resumeGame={this.resumeGame}
                       hidden={this.state.popupHidden}
                       percent={this.state.percent}
                       status={this.state.status}
                       gifSrc={this.state.gifSrc}/>
                <div className='GameBoard'>
                    {this.state.showGif && (
                        <div>
                            { this.renderScorefBox() }
                        </div>
                    )}
                    <div className='DottedBox_content'>
                        <h2>{this.props.CurrentCard.title}</h2>
                        <img className="image-container" src={this.props.CurrentCard.thumb} alt="logo"/>
                        <p>{this.props.CurrentCard.description}</p>
                        <div className="col-1">
                            <h4>Impeachment Chance - </h4>
                            <h4>Probable Illegality- </h4>
                            <h4>Direct Involvement - </h4>
                            <h4>Media Attention - </h4>
                        </div>
                        <div className="col-2">
                            <button onClick={() => {this.handleScoreClick('Impeachment')}} >

                                {this.props.CurrentCard.Impeachment}
                            </button>
                            <button onClick={() => {this.handleScoreClick('Illegality')}} >

                                {this.props.CurrentCard.Illegality}
                            </button>
                            <button onClick={() => {this.handleScoreClick('Involvement')}} >

                                {this.props.CurrentCard.Involvement}
                            </button>
                            <button onClick={() => {this.handleScoreClick('Media')}} >

                                {this.props.CurrentCard.Media}
                            </button>
                        </div>
                    </div>
                    <div className='OpponentBox'>
                        <h2>Opponent Card</h2>
                        {this.state.LostGuess && (
                            <div className='HiddenCard'>
                                <h3>{this.props.OpponentCurrentCard.title}</h3>
                                <h2>Impeachment chance-{this.props.OpponentCurrentCard.Impeachment}</h2>
                                <h2>Illegality- {this.props.OpponentCurrentCard.Illegality}</h2>
                                <h2>Direct Involvement -{this.props.OpponentCurrentCard.Involvement}</h2>
                                <h2>Media Attention -{this.props.OpponentCurrentCard.Media}</h2>
                            </div>
                        )}
                    </div>
                </div>
                <CardsBar percent={this.state.percent} />
            </div>
        );
    }
}

export default GameBoard;
