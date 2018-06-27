import React from 'react';
import './PlayersCards.css';

class NumberCard extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div className="NumbersBox">
                <h3>{this.props.card.title}</h3>
                <h2>{this.props.card.Number}</h2>
                </div>
        );

    }
}

export default NumberCard;