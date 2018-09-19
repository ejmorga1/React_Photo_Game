import React, {
    Component
} from 'react';
import './App.css';

import photos from './photos.json';

import Game from './components/Game';
import Nav from './components/Nav';
import Title from './components/Title';
import Wrapper from './components/Wrapper';

class App extends Component {

    state = {
        photos: photos,
        clicked: photos,
        score: 0,
        top: 0,
    };

    shuffleCards = (cards) => {
        for (let i = 0; i < cards.length; i++) {
            let j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        };
    };

    correctGuess = (newClicked) => {
        let newScore = this.state.score + 1;

        this.setState({
            photos: photos,
            clicked: newClicked,
            score: newScore,
            top: this.state.top,
        });
    };

    incorrectGuess = () => {
        let newTop = this.state.top;

        if (this.state.score > this.state.top) {
            newTop = this.state.score
        };

        this.setState({
            photos: photos,
            clicked: photos,
            score: 0,
            top: newTop,
        });
    };

    photoClicked = id => {
        if (this.state.clicked.find((item) => item.id === id) === undefined) {
            this.incorrectGuess();
            // alert("wrong");
        } else {
            let newClicked = this.state.clicked.filter((item) => item.id !== id);
            this.correctGuess(newClicked);
            // alert("right");
        };
        this.shuffleCards(photos);
    };

    render() {
        return (
            <Wrapper>
                <Nav 
                    score={ this.state.score } 
                    top={ this.state.top }
                />
                <Title/>
                { this.state.photos.map( photo => (
                        <Game
                            id = { photo.id }
                            image = { photo.image }
                            photoClicked = { this.photoClicked }
                        />
                    ))}
            </Wrapper>
        );
    };
};

export default App;

