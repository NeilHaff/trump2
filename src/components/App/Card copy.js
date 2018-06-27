import React from 'react';
import './PlayersCards.css';

class Card extends React.Component {
  render() {
    console.log(this.props)
      return (
          <li className="PlayerCards">
              {this.props.Posts.map((post, idx) => {
                  return this.props.CurrentCardIndex !== idx ? (
                      <li key={idx}>
                          <h3>{post.title}</h3>
                          <p>{post.description}</p>
                          <div className="image-container">
                              <img src={post.thumb} alt=''/>
                          </div>
                      </li>
                  ):null;
              })}
          </li>
      );

  }
}

export default Card;
