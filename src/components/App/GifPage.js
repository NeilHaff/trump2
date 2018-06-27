      //  import React from 'react';
        import '../SearchBar/GameBoard.css';


        class GifBox extends React.Component {
            constructor(props) {
                super(props);
                this.state = {showGif: false};
            }

            function GifAlert({ this.props.percent, this.state. showGif= false }) {
            switch(showGif= true) {
                case (this.props.percent=100):
                    return <img className="image-container"
                                src={'https://i.giphy.com/media/M0fiGpVK7wKMU/giphy.webp'}
                                alt="logo"/>;
                case (this.props.percent=80):
                    return <img className="image-container"
                                src={'https://i.giphy.com/media/M0fiGpVK7wKMU/giphy.webp'}
                                alt="logo"/>;
                case (this.props.percent=60):
                    return <img className="image-container"
                                src={'https://i.giphy.com/media/M0fiGpVK7wKMU/giphy.webp'}
                                alt="logo"/>;
                case (this.props.percent=40):
                    return <img className="image-container"
                                src={'https://i.giphy.com/media/M0fiGpVK7wKMU/giphy.webp'}
                                alt="logo"/>;
                case (this.props.percent=20):
                    return <img className="image-container"
                                src={'https://i.giphy.com/media/M0fiGpVK7wKMU/giphy.webp'}
                                alt="logo"/>;
                case (this.props.percent=0):
                    return <img className="image-container"
                                src={'https://i.giphy.com/media/M0fiGpVK7wKMU/giphy.webp'}
                                alt="logo"/>;
                default:
                    return null;
            }
        }


            render() {
                    if (
                        this.state.showGif= false, this.props.percent=60)
                    {this.setState (this.state.showGif= true);
                        return (
                        <img className="image-container"
                             src={'https://i.giphy.com/media/M0fiGpVK7wKMU/giphy.webp'}
                             alt="logo"/>)
                    }
                    else{
                        return (
                            <img className="image-container"
                                 src={'https://i.giphy.com/media/M0fiGpVK7wKMU/giphy.webp'}
                                 alt="logo"/>)
                }
                else{
                        return (
                            <img className="image-container"
                                 src={'https://i.giphy.com/media/M0fiGpVK7wKMU/giphy.webp'}
                                 alt="logo"/>)
                    }

        }

        export default GifBox;