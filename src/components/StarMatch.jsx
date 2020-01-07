import React, {Component} from 'react';
import Game from "./Game";

class StarMatch extends Component {
    state = {
        gameId: 1
    };

    render() {
        return (
            <Game
                key={this.state.gameId}
                startNewGame={() => this.setState({gameId: this.state.gameId + 1})}
            />
        );
    }
}

export default StarMatch;