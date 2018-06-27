import React from 'react';
import './CardsBar.css';
import Line from './Line';

class CardsBar extends React.Component {

    constructor() {
        super();
        this.state = {
            percent: 0,
        };
        this.increase = this.increase.bind(this);
        this.restart = this.restart.bind(this);
    }

    componentDidMount() {
        this.increase();
    }

    increase() {
        const percent = this.state.percent + 1;
        if (percent >= 50) {
            clearTimeout(this.tm);
            return;
        }
        this.setState({ percent });
        this.tm = setTimeout(this.increase, 10);
    }
    

    restart() {
        clearTimeout(this.tm);
        this.setState({ percent: 0 }, () => {
            this.increase();
        });
    }



    render() {
        console.log(this.state)
        return (
            <div className='MainDiv'>
            <div className='Textcontainer'>
                    <p>Your Cards</p>
                <div style={{ margin: 10, width: 300 }}></div>
                    <p> Opponent Cards </p>
            </div>
                         <div className='BarHolder'>
                         <Line strokeWidth="4" percent={this.state.percent} />
                         </div>
            </div>
        );
    }

}



export default CardsBar;
