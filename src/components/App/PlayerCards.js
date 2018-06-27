import React from 'react';
import './PlayersCards.css';

import Card from './Card';

class PlayerCards extends React.Component {
    render() {
        return (
            <div>
                <h1>Your Cards</h1>
                <div className="MainBoard">
                    {this.props.Cards.filter(card=>card.id!==this.props.CurrentCardID).map(card => {
                        return <Card card={card} />
                    })}
                </div>
            </div>
        )
    }
}

export default PlayerCards;

