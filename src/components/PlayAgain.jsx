import React, {Component} from 'react';

class PlayAgain extends Component {
    render() {
        return (
            <div>
                <div
                    className="message"
                    style={ {color: this.props.gameStatus === 'lost' ? 'red' : 'green'} }
                >
                    { this.props.gameStatus === 'lost' ? 'Game over' : 'Good job!' }
                </div>
                <button
                    className="game-done"
                    onClick={this.props.onReset}
                >
                    Play Again
                </button>
            </div>
        );
    }
}

export default PlayAgain;