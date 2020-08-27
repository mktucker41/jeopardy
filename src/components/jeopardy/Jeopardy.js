import React, { Component } from "react";
import Display from "../display/Display";
//import our service
import JeopardyService from "../../jeopardyService/JeopardyService";
class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props) {
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: { category: {} },
      score: 0,
      answerGuess: "",
    };
  }
  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then((result) => {
      this.setState({
        data: result.data[0],
      });
    });
  }
  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }
  handleChange = (event) => {
    const answerGuess = event.target.value;
    this.setState({ answerGuess });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      submitted: true,
    });
  };
  makeGuess = (event) => {
    let score = this.state.score;
    if (this.state.data.answer === this.state.answerGuess) {
      score += this.state.data.value;
    } else {
      score -= this.state.data.value;
    }
    this.setState({ score, answerGuess: "" });
    this.getNewQuestion();
  };
  //display the results on the screen
  render() {
    return (
      <div>
        <Display
          score={this.state.score}
          data={this.state.data}
          answerGuess={this.state.answerGuess}
          handleChange={this.handleChange}
          makeGuess={this.makeGuess}
        />
      </div>
    );
  }
}
export default Jeopardy;
