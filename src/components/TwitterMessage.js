import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      tweet: "",
      charsLeft: props.maxChars
    };
  }

  updateCharsLeft = (e) => {
    const value = e.target.value
    this.setState({
        tweet: value,
        charsLeft: this.props.maxChars - value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.tweet} onChange={this.updateCharsLeft} />
        <span>{this.state.charsLeft}/{this.props.maxChars}</span>
      </div>
    );
  }
}

export default TwitterMessage;
