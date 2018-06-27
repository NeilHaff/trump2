import React from 'react';
import './GameBoard.css';

class GameBoard extends React.Component {
    constructor(props){
        super(props);
        this.state = { showGif: false }
        this.state = { LostGuess: false }
        }

    _showGif = (bool) => {
        this.setState({
            showMessage: bool
        });
    }

    _LostGuess = (bool) => {
    this.setState({
        showMessage: bool
        });
    }

    buttonClicked(num) {
    if (this.props.CurrentCard['number' + num.toString()] > 0) {
        this.setState({playerwin: true});


                } else {
                      this.setState({playerlose: true});
                      this.state = {showGif: true};
                     this.state = {LostGuess: true};
                     }
                 }


    resetGame() {

    }

  render() {
        console.log(this.state)
    return (
        <div className='GameBoard'>
            <div className='DottedBox_content'>
                <h2>{this.props.CurrentCard.title}</h2>
                <img className="image-container" src={this.props.CurrentCard.thumb} alt="logo"/>
                    <p>{this.props.CurrentCard.description}</p>
                             <div className="col-1">
                                <h4>Impeachment Chance - </h4>
                                  <h4>Probable Illegality- </h4>
                                  <h4>Direct Involvement - </h4>
                             </div>
                                    <div className="col-2">
                                         <button onClick=
                                        {this.buttonClicked.bind(this)}>
                                             {this.props.CurrentCard.Impeachment}</button>
                                         {'\n'}
                                             <button onClick=
                                        {this.buttonClicked.bind(this)}>
                                        {this.props.CurrentCard.Illegality}</button>
                                        {'\n'}
                                         <button onClick=
                                        {this.buttonClicked.bind(this)}>
                                        {this.props.CurrentCard.Involvement}</button>
                                    </div>
            </div>
                <div className='OpponentBox'>
                    <div className='empty'>
                        { this.state.LostGuess && (
                            <div className='HiddenCard'>
                                <h2>{this.props.OpponentCurrentCard.title}</h2>
                                <h4>{this.props.OpponentCurrentCard.description}</h4>
                                <h4>Impeachment chance-{this.props.OpponentCurrentCard.Impeachment}</h4>
                                <h4>Illegality- {this.props.OpponentCurrentCard.Illegality}</h4>
                                <h4>Direct Involvement -{this.props.OpponentCurrentCard.Involvement}</h4>
                            </div>

                        )

                        }
                    </div>
                    <h2>Opponenent Card</h2>
                </div>
            <div className='GifBox'>
                { this.state.showGif && (<img className="image-container" src="https://i.giphy.com/media/M0fiGpVK7wKMU/giphy.webp" alt="logo"/>)

                     }
            </div>
        </div>

        );
      }
   }

export default GameBoard;
