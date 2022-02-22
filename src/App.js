import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Game from "./components/Game/Game";
import React, { Component } from "react";

export default class App extends Component {
  state = {
    userChoice: "",
    compChoice: "",
    wins: 0,
    lose: 0,
    variants: [
      { name: "rock", id: 1, lose: 2, show: false },
      { name: "paper", id: 2, lose: 3, show: false },
      { name: "scissors", id: 3, lose: 1, show: false },
    ],
    end: false,
  };

  randomItem = () => {
    let random = Math.floor(Math.random() * 3 + 0);
    const botChoice = this.state.variants[random];
    this.setState({
      compChoice: botChoice,
    });
    return botChoice;
  };

  showFun = (id) => {
    let random = this.randomItem();
    let lose = this.state.lose;
    let wins = this.state.wins;
    if (wins >= 5) {
      this.setState({ end: true });
    } else if (lose >= 5) {
      this.setState({ end: true });
    }
    const userChoice = this.state.variants.find((item) => item.id === id);
    if (userChoice.lose === random.id) {
      lose++;
    } else if (userChoice.id === random.lose) {
      wins++;
    }
    this.setState({
      variants: this.state.variants.map((item) => {
        const copy = { ...item };
        copy.show = false;
        if (copy.id === id) {
          copy.show = true;
        }
        return copy;
      }),
      lose,
      wins,
    });
  };

  render() {
    let result = null;
    if (this.state.wins >= 5) {
      result = (
        <h1>
          Вы выйграли со счетом {this.state.wins} : {this.state.lose}
        </h1>
      );
    } else if (this.state.lose >= 5) {
      result = (
        <h1>
          Вы проиграли со счетом {this.state.wins} : {this.state.lose}
        </h1>
      );
    }

    return (
      <div className="wrapper">
        <Navbar wins={this.state.wins} lose={this.state.lose} />
        {!this.state.end ? (
          <Game
            var={this.state.variants}
            state={this.setState}
            show={this.showFun}
            random={this.randomItem}
            image={this.state.compChoice}
          />
        ) : (
          result
        )}
      </div>
    );
  }
}
