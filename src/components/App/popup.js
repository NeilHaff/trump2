import React from 'react';
import './App.css';

class Popup extends React.Component {
    showPopUp(){
        if (this.props.percent === 95 || this.props.percent === 40) {
            console.log(this.props.percent)
            return (
                <div>
                    <div className='content'>
                    <h1>Trump Scandal Top Trumps </h1>
                    <p>Choose a number on the card to beat your opponents card and win in as few moves as possible. </p>
                    <button onClick={() => this.props.startGame()}>
                        <h2>Start Game</h2>
                    </button>
                    </div>
                </div>
            );
        } else if (this.props.status === 'win'){
            console.log('working gifbox')
            window.open('/final',"_self");
        } else if  (this.props.percent === 5 || this.props.percent === 20 || this.props.percent === 45 || this.props.percent === 65
                || this.props.percent === 85 || this.props.percent === 100
        ){
            console.log('working gifbox')
            setTimeout(this.props.resumeGame, 7000)
            return (
                <div>
                    <img className="Gif" src={this.props.gifSrc} alt="logo"/>
                </div>
            );
        }

        else  {
            console.log(this.props.status === 'lose')
            return (
                <div>
                    <div className='content'>
                    <h1>Total loser. You Are Fake News</h1>
                    <p>Please blame Hillary.</p>
                    <button onClick={() => this.props.startGame()}>
                        <h2>Start Game</h2>
                    </button>
                    </div>
                </div>
            );
        }
    }

    render() {
        let style = {
            display : this.props.hidden ? 'none' : ''
        };
        return (
            <div className='modal' style={style}>
                    <div>
                        { this.showPopUp() }
                    </div>
            </div>
        );
     }
    }

export default Popup;

