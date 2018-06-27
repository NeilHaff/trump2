import React from 'react';
import './PlayersCards.css';
import Routes from '../Routes/Routes';
import Posts from './PostPage';
import Numbers from './Numbers';
import {Share} from 'react-twitter-widgets';
import {Link} from "react-router-dom";
import { FacebookShareButton, TwitterShareButton, TelegramShareButton, WhatsappShareButton,  RedditShareButton, TumblrShareButton,} from 'react-share';
import {  FacebookIcon, TelegramIcon,  TwitterIcon, WhatsappIcon, PinterestIcon, RedditIcon, TumblrIcon, } from 'react-share';

import NumberCard from './NumberCard';
import Card from './Card';

class FinalPage extends React.Component {
    render() {
        return (
            <div className='final'>
             <h1>Trump Scandal Top Trumps</h1>
            <div className='TopStatement'>
                <div className='TopText'>
                    <h5>Congratulations, you have won.</h5>
                    <h4>Obama, Hillary and not even the failing New York Times could stop you.</h4>
                    <h5>Please help spread spread the word. </h5>
                    <div className='iconset'>
                   <FacebookShareButton url={"http://trumptoptrumps.com"} className='socialicon' >
                       <FacebookIcon size={32} round={true} />
                   </FacebookShareButton>
                       <TelegramShareButton url={"http://trumptoptrumps.com"} className='socialicon' >
                           <TelegramIcon size={32} round={true} />
                       </TelegramShareButton>
                       <WhatsappShareButton url={"http://trumptoptrumps.com"} className='socialicon' >
                           <WhatsappShareButton size={32} round={true} />
                       </WhatsappShareButton>
                       <RedditShareButton url={"http://trumptoptrumps.com"} className='socialicon' >
                           <RedditIcon size={32} round={true} />
                       </RedditShareButton>
                       <TwitterShareButton url={"http://trumptoptrumps.com"} className='socialicon' >
                           <TwitterIcon size={32} round={true} />
                       </TwitterShareButton>
                       <WhatsappShareButton url={"http://trumptoptrumps.com"} className='socialicon' >
                           <WhatsappIcon size={32} round={true} />
                       </WhatsappShareButton>
                    </div>
                </div>
                <div className='TopGif'>
                    <img className="Gif" src={'image/pencekiss.gif'} alt="logo"/>
                </div>
            </div>
                <h1>The Numbers</h1>
                <div className="NumbersBoard">
                    {Numbers.map(card => {
                        return <NumberCard card={card} />
                    })}
                </div>
                <h1>All The Scandal Cards</h1>
            <div className="MainBoard">
        {Posts.map(card => {
            return <Card card={card} />
        })}

                <button>
                    <Link className='endbutton' to={'/'}>
                        <h2>Re-Start Game</h2>
                    </Link>
                </button>
        </div>
                <div className='Footer'>
                    <p>Site by <a href={'https://twitter.com/neilhaffenden'} target="_blank" rel="noopener" className="link">Neil Haffenden</a> made using <a href={'https://reactjs.org/'} target="_blank" rel="noopener" className="link">React</a></p>
                </div>
    </div>



        );
    }
}



export default FinalPage;