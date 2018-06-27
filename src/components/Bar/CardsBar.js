import React from 'react';
import './CardsBar.css';
import Line from './Line';

class CardsBar extends React.Component {


    // gamestart() {
    //     const percent = this.state.percent + 1;
    //     if (percent >= 50) {
    //         clearTimeout(this.tm);
    //         return;
    //     }
    //     this.setState({ percent });
    //     this.tm = setTimeout(this.increase, 10);
    // }
    //
    // increase() {
    //     if (this.props.PlayerWin) {
    //         this.setState(prevState => {
    //             return {percent: prevState.percent + 5}
    //         });
    //
    //     }
    // }
    //
    // decrease() {
    //     if (this.props.PlayerLose) {
    //         this.setState(prevState => {
    //             return {percent: prevState.percent - 5}
    //         });
    //     }
    // }
    //
    // restart() {
    //     clearTimeout(this.tm);
    //     this.setState({ percent: 0 }, () => {
    //         this.increase();
    //     });
    // }

    render() {
        return (
            <div className='MainDiv'>
                <div className='Textcontainer'>
                    <p>Losing</p>
                    <div style={{ margin: 10, width: 300 }}></div>
                    <p>Winning</p>
                </div>
                <div className='BarHolder'>
                    <Line strokeWidth="4" percent={this.props.percent} />
                </div>
            </div>
        );
    }
}



export default CardsBar;
