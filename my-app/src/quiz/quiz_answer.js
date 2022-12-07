import React, { Component, Fragment } from "react";
class Answer extends Component {
 
  state = {
    Answers: this.props.anwer,
    Clickcheck:true,
    rightAnaswer: this.props.rightAnaswer
  };

  onAnswer = () => {
    this.setState({ 
      Clickcheck:false
    });
  };
  
  render() {
   
    return (
      <Fragment>
        { this.state.Clickcheck ? this.state.Answers.map(ans => {
          return <button onClick={this.onAnswer}> {ans}</button>;
        }) : <button > {this.state.rightAnaswer}</button>  }
      </Fragment>
    );
  }
}

export default Answer;