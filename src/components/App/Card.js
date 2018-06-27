import React from 'react';
import './PlayersCards.css';

class Card extends React.Component {
  render() {
    console.log(this.props)
      return (
          <div className="CardBox">
                          <h3>{this.props.card.title}</h3>
                          <p>{this.props.card.description}</p>
                          <div className="image-container">
                              <img src={this.props.card.thumb} alt=''/>
                              <a href={this.props.card.Link} target="_blank" rel="noopener" className="link">Read More</a>
                          </div>

          </div>
      );

  }
}

export default Card;
